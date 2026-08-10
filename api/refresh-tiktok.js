// Vercel Cron target (see vercel.json) - refreshes the stored TikTok access token
// and writes the latest @mca_uk video to Firestore (tiktokLatest/current) for
// src/services/tiktokService.js to read client-side.
//
// Requires api/tiktok-oauth-callback.js to have been run once already, so that
// tiktokAuth/tokens exists in Firestore with a working refresh token.
import fetch from "node-fetch";
import { getAdminDb } from "./_lib/firebaseAdmin.js";

function isAuthorized(req) {
  // Vercel adds this header to requests it triggers via Cron.
  if (req.headers["x-vercel-cron"]) {
    return true;
  }
  // Allow manual/testing triggers with a shared secret.
  const auth = req.headers.authorization || "";
  return auth === `Bearer ${process.env.TIKTOK_CRON_SECRET}`;
}

async function recordError(db, message) {
  console.error("refresh-tiktok error:", message);
  await db.collection("tiktokLatest").doc("current").set(
    {
      status: "error",
      lastError: message,
      lastAttemptAt: Date.now()
    },
    { merge: true }
  );
}

export default async function handler(req, res) {
  if (!isAuthorized(req)) {
    return res.status(403).json({ error: "Forbidden" });
  }

  const db = getAdminDb();

  try {
    const authDoc = await db.collection("tiktokAuth").doc("tokens").get();
    if (!authDoc.exists) {
      await recordError(db, "No stored TikTok tokens. Run the OAuth setup (api/tiktok-oauth-callback) first.");
      return res.status(412).json({ error: "TikTok not authorized yet" });
    }

    const { refreshToken } = authDoc.data();
    const clientKey = process.env.TIKTOK_CLIENT_KEY;
    const clientSecret = process.env.TIKTOK_CLIENT_SECRET;

    if (!clientKey || !clientSecret) {
      await recordError(db, "Missing TIKTOK_CLIENT_KEY / TIKTOK_CLIENT_SECRET env vars.");
      return res.status(500).json({ error: "Server misconfigured" });
    }

    // 1. Refresh the access token (TikTok rotates the refresh token each use).
    const tokenResponse = await fetch("https://open.tiktokapis.com/v2/oauth/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cache-Control": "no-cache"
      },
      body: new URLSearchParams({
        client_key: clientKey,
        client_secret: clientSecret,
        grant_type: "refresh_token",
        refresh_token: refreshToken
      })
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.access_token) {
      await recordError(db, `Token refresh failed: ${JSON.stringify(tokenData)}`);
      return res.status(502).json({ error: "Token refresh failed" });
    }

    await db.collection("tiktokAuth").doc("tokens").set({
      accessToken: tokenData.access_token,
      refreshToken: tokenData.refresh_token,
      accessTokenExpiresAt: Date.now() + tokenData.expires_in * 1000,
      openId: tokenData.open_id || null,
      updatedAt: Date.now()
    });

    // 2. Fetch the most recent video.
    const videoResponse = await fetch(
      "https://open.tiktokapis.com/v2/video/list/?fields=id,share_url,embed_link,create_time",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ max_count: 1 })
      }
    );

    const videoData = await videoResponse.json();
    const latestVideo = videoData?.data?.videos?.[0];

    if (!videoResponse.ok || !latestVideo) {
      await recordError(db, `Video list fetch failed: ${JSON.stringify(videoData)}`);
      return res.status(502).json({ error: "Video list fetch failed" });
    }

    // 3. Persist the latest video for the frontend to read.
    await db.collection("tiktokLatest").doc("current").set({
      videoId: latestVideo.id,
      shareUrl: latestVideo.share_url,
      embedLink: latestVideo.embed_link,
      createTime: latestVideo.create_time,
      fetchedAt: Date.now(),
      status: "ok",
      lastError: null
    });

    return res.status(200).json({ success: true, videoId: latestVideo.id });
  } catch (err) {
    await recordError(db, err.message);
    return res.status(500).json({ error: "Unexpected error", message: err.message });
  }
}
