import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

// Ignore stale data older than this - prefer the local fallback video instead.
const MAX_AGE_MS = 14 * 24 * 60 * 60 * 1000; // 14 days

// Returns the latest TikTok video info from Firestore, or null if missing/stale/errored.
export const getLatestTikTok = async () => {
  try {
    if (!db) {
      return null;
    }

    const snapshot = await getDoc(doc(db, 'tiktokLatest', 'current'));

    if (!snapshot.exists()) {
      return null;
    }

    const data = snapshot.data();

    if (data.status !== 'ok' || !data.shareUrl) {
      return null;
    }

    const age = Date.now() - (data.fetchedAt || 0);
    if (age > MAX_AGE_MS) {
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching latest TikTok video:', error);
    return null;
  }
};
