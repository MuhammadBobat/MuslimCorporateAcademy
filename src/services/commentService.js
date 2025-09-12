import { 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase';

// Check if Firebase is properly initialized
const checkFirebaseConnection = () => {
  if (!db) {
    throw new Error('Firebase is not properly initialized. Please check your configuration.');
  }
  return true;
};

// Enhanced inappropriate words filter
const inappropriateWords = [
    'fuck',
    'shit',
    'bitch',
    'asshole',
    'bastard',
    'dick',
    'pussy',
    'cunt',
    'slut',
    'whore',
    'fag',
    'faggot',
    'nigger',
    'nigga',
    'retard',
    'crap',
    'cock',
    'dildo',
    'penis',
    'vagina',
    'boobs',
    'tits',
    'cum',
    'jizz',
    'blowjob',
    'handjob',
    'porn',
    'porno',
    'nude',
    'nudity',
    'sex',
    'sexy',
    'suck',
    'jerkoff',
    'jackoff',
    'hentai',
    'milf',
    'bdsm',
    'rape',
    'molest',
    'orgy',
    'anal',
    'fetish',
    'gay',
    'lesbian',
    'trans',
    'queer',
    'kike',
    'chink',
    'spic',
    'gook',
    'coon'
  ];

// Islamic terms that should be allowed even with caps
const allowedIslamicTerms = [
  'subhanallah',
  'alhamdulillah',
  'allahuakbar',
  'bismillah',
  'inshallah',
  'mashallah',
  'astaghfirullah',
  'laillahaillallah',
  'allah',
  'muhammad',
  'rasulullah',
  'nabi',
  'quran',
  'hadith',
  'sunnah',
  'islam',
  'muslim',
  'iman',
  'taqwa',
  'sabr',
  'shukr',
  'tawakkul',
  'ikhlas',
  'haya',
  'ihsan',
  'ilm',
  'dua',
  'dhikr',
  'salah',
  'zakat',
  'hajj',
  'ramadan',
  'eid',
  'jannah',
  'jahannam',
  'akhirah',
  'dunya',
  'barakah',
  'fitrah',
  'halal',
  'haram',
  'sadaqah',
  'zakat',
  'wudu',
  'ghusl',
  'tayammum',
  'qibla',
  'kaaba',
  'masjid',
  'madinah',
  'makkah',
  'jerusalem',
  'alquds'
];
  

// Comment moderation function
export const moderateComment = (text, author) => {
  const lowerText = text.toLowerCase();
  const lowerAuthor = author.toLowerCase();
  
  // Check for inappropriate content
  const hasInappropriateContent = inappropriateWords.some(word => 
    lowerText.includes(word) || lowerAuthor.includes(word)
  );
  
  // Check for Islamic terms (allow these even with caps)
  const hasIslamicTerms = allowedIslamicTerms.some(term => 
    lowerText.includes(term) || lowerAuthor.includes(term)
  );
  
  // Check for excessive caps (spam indicator) - but allow if contains Islamic terms
  const capsRatio = (text.match(/[A-Z]/g) || []).length / text.length;
  const hasExcessiveCaps = capsRatio > 0.7 && text.length > 20 && !hasIslamicTerms;
  
  // Check for repeated characters (spam indicator)
  const hasRepeatedChars = /(.)\1{4,}/.test(text);
  
  // Check for suspicious patterns
  const hasSuspiciousPatterns = /(http|www|\.com|\.org)/i.test(text) && text.length < 50;
  
  return {
    isAppropriate: !hasInappropriateContent && !hasExcessiveCaps && !hasRepeatedChars && !hasSuspiciousPatterns,
    reasons: {
      inappropriateContent: hasInappropriateContent,
      excessiveCaps: hasExcessiveCaps,
      repeatedChars: hasRepeatedChars,
      suspiciousPatterns: hasSuspiciousPatterns
    }
  };
};

// Add a new comment
export const addComment = async (blogId, author, content) => {
  try {
    // Check Firebase connection first
    checkFirebaseConnection();
    
    // Moderate the comment
    const moderation = moderateComment(content, author);
    
    if (!moderation.isAppropriate) {
      const reasons = [];
      if (moderation.reasons.inappropriateContent) reasons.push('inappropriate content');
      if (moderation.reasons.excessiveCaps) reasons.push('excessive capitalization');
      if (moderation.reasons.repeatedChars) reasons.push('repeated characters');
      if (moderation.reasons.suspiciousPatterns) reasons.push('suspicious patterns');
      
      throw new Error(`Comment rejected: ${reasons.join(', ')}`);
    }
    
    // Validate input
    if (!author.trim() || !content.trim()) {
      throw new Error('Author and content are required');
    }
    
    if (content.length < 10) {
      throw new Error('Comment must be at least 10 characters long');
    }
    
    if (content.length > 1000) {
      throw new Error('Comment must be less than 1000 characters');
    }
    
    // Add comment to Firestore
    const commentData = {
      blogId: blogId,
      author: author.trim(),
      content: content.trim(),
      timestamp: serverTimestamp(),
      status: 'approved', // For future moderation features
      ipAddress: 'anonymous', // You can add IP tracking for additional security
    };
    
    const docRef = await addDoc(collection(db, 'comments'), commentData);
    
    return {
      id: docRef.id,
      ...commentData,
      timestamp: new Date().toISOString() // Fallback timestamp
    };
    
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
};

// Get comments for a specific blog post
export const getComments = async (blogId) => {
  try {
    // Check Firebase connection first
    checkFirebaseConnection();
    
    // Simplified query to avoid composite index requirement
    const q = query(
      collection(db, 'comments'),
      where('blogId', '==', blogId)
      // Removed status filter and orderBy to avoid composite index requirement
    );
    
    const querySnapshot = await getDocs(q);
    const comments = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      
      // Filter by status in JavaScript instead of Firestore
      if (data.status === 'approved' || !data.status) { // Include comments without status field
        const comment = {
          id: doc.id,
          ...data,
          timestamp: data.timestamp?.toDate?.() || new Date(data.timestamp),
          date: data.timestamp?.toDate?.()?.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }) || new Date(data.timestamp).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        };
        
        comments.push(comment);
      }
    });
    
    // Sort by timestamp in JavaScript instead of Firestore
    comments.sort((a, b) => {
      const dateA = new Date(a.timestamp);
      const dateB = new Date(b.timestamp);
      return dateB - dateA; // Descending order (newest first)
    });
    
    return comments;
    
  } catch (error) {
    console.error('Error getting comments:', error);
    throw error;
  }
};

// Get comment count for a blog post
export const getCommentCount = async (blogId) => {
  try {
    const q = query(
      collection(db, 'comments'),
      where('blogId', '==', blogId),
      where('status', '==', 'approved')
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.size;
    
  } catch (error) {
    console.error('Error getting comment count:', error);
    return 0;
  }
}; 