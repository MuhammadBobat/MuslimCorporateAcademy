// One-time-use route: completes the TikTok OAuth handshake for @mca_uk.
//
// Setup (do this once):
// 1. Deploy this route.
// 2. Build an authorize URL and open it in a browser while logged in as @mca_uk:
//      https://www.tiktok.com/v2/auth/authorize/
//        ?client_key=<TIKTOK_CLIENT_KEY>
//        &scope=user.info.basic,video.list
//        &response_type=code
//        &redirect_uri=<this route's full URL>
//        &state=<TIKTOK_SETUP_KEY>
// 3. Approve access. TikTok redirects back here with ?code=...&state=...
// 4. This route exchanges the code for tokens and stores the refresh token
//    in Firestore (tiktokAuth/tokens) so api/refresh-tiktok.js can use it.
//
// The `state` param doubles as a shared secret so this route can't be triggered
// by anyone who doesn't know TIKTOK_SETUP_KEY.
import fetch from "node-fetch";
import { getAdminDb } from "./_lib/firebaseAdmin.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { code, state, error, error_description: errorDescription } = req.query;

  if (error) {
    return res.status(400).send(`TikTok returned an error: ${error} - ${errorDescription || ""}`);
  }

  if (!code) {
    return res.status(400).send("Missing 'code' query param. This route is meant to be hit via TikTok's OAuth redirect.");
  }

  if (!state || state !== process.env.TIKTOK_SETUP_KEY) {
    return res.status(403).send("Invalid or missing state. Refusing to complete OAuth handshake.");
  }

  const clientKey = process.env.TIKTOK_CLIENT_KEY;
  const clientSecret = process.env.TIKTOK_CLIENT_SECRET;
  const redirectUri = process.env.TIKTOK_REDIRECT_URI;

  if (!clientKey || !clientSecret || !redirectUri) {
    console.error("Missing TikTok OAuth configuration");
    return res.status(500).send("Server is missing TIKTOK_CLIENT_KEY / TIKTOK_CLIENT_SECRET / TIKTOK_REDIRECT_URI.");
  }

  try {
    const tokenResponse = await fetch("https://open.tiktokapis.com/v2/oauth/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cache-Control": "no-cache"
      },
      body: new URLSearchParams({
        client_key: clientKey,
        client_secret: clientSecret,
        code,
        grant_type: "authorization_code",
        redirect_uri: redirectUri
      })
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.refresh_token) {
      console.error("TikTok token exchange failed:", tokenData);
      return res.status(502).send(`Token exchange failed: ${JSON.stringify(tokenData)}`);
    }

    const db = getAdminDb();
    await db.collection("tiktokAuth").doc("tokens").set({
      accessToken: tokenData.access_token,
      refreshToken: tokenData.refresh_token,
      accessTokenExpiresAt: Date.now() + tokenData.expires_in * 1000,
      openId: tokenData.open_id || null,
      updatedAt: Date.now()
    });

    return res.status(200).send(
      "TikTok authorization complete. The refresh token has been stored in Firestore " +
      "(tiktokAuth/tokens). You can now trigger /api/refresh-tiktok, and the daily cron " +
      "will keep it updated automatically. You should disable or remove this route now " +
      "that setup is done."
    );
  } catch (err) {
    console.error("OAuth callback error:", err);
    return res.status(500).send(`Unexpected error completing OAuth handshake: ${err.message}`);
  }
}
