// Shared Firebase Admin SDK init for Vercel serverless functions.
// Uses a service account JSON stored as a single env var (Vercel env vars are strings only).
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function getAdminApp() {
  if (getApps().length) {
    return getApps()[0];
  }

  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) {
    throw new Error("Missing FIREBASE_SERVICE_ACCOUNT_JSON environment variable");
  }

  const serviceAccount = JSON.parse(raw);

  return initializeApp({
    credential: cert(serviceAccount)
  });
}

export function getAdminDb() {
  return getFirestore(getAdminApp());
}
