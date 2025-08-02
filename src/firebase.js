import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDm9fL6xVWoctIYDu-GwplHIqiyR3TJckg",
    authDomain: "muslim-corporate-academy.firebaseapp.com",
    projectId: "muslim-corporate-academy",
    storageBucket: "muslim-corporate-academy.firebasestorage.app",
    messagingSenderId: "1094433416183",
    appId: "1:1094433416183:web:f6fcdf093cab5ffcdec4f2",
    measurementId: "G-HKKQTCNE73"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app);
  } catch (error) {
    console.log('Analytics not available:', error);
  }
}

// Initialize Firestore
export const db = getFirestore(app);

export default app; 