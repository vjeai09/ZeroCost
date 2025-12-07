// Firebase config for XENEX AI - Mobile App
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  initializeAuth,
  getReactNativePersistence 
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configs for all platforms
const firebaseConfigWeb = {
  apiKey: "AIzaSyC2_9PZQdyWW1a8ZyAdw5Ubr_7xZQDWXME",
  authDomain: "xenexai-b8806.firebaseapp.com",
  projectId: "xenexai-b8806",
  storageBucket: "xenexai-b8806.firebasestorage.app",
  messagingSenderId: "905133111716",
  appId: "1:905133111716:web:a292ee39cec23f2ee46931",
  measurementId: "G-9PESQ9JHHQ"
};

const firebaseConfigAndroid = {
  apiKey: "AIzaSyCzlCkphMnEFZCGNcqi5jUAZXwxiOTc6Gc",
  authDomain: "xenexai-b8806.firebaseapp.com",
  projectId: "xenexai-b8806",
  storageBucket: "xenexai-b8806.firebasestorage.app",
  messagingSenderId: "905133111716",
  appId: "1:905133111716:android:135a564b65b52a25e46931"
};

const firebaseConfigIOS = {
  apiKey: "AIzaSyBqC5RqXy53EbuIWd3Yi6RprMbVSKbYSiA",
  authDomain: "xenexai-b8806.firebaseapp.com",
  projectId: "xenexai-b8806",
  storageBucket: "xenexai-b8806.firebasestorage.app",
  messagingSenderId: "905133111716",
  appId: "1:905133111716:ios:287f8b23c5f07926e46931"
};

// Detect platform safely without importing Platform at module level
function getFirebaseConfig() {
  try {
    // Try to detect if we're in React Native environment
    const RN = require('react-native');
    if (RN.Platform) {
      if (RN.Platform.OS === 'android') {
        return firebaseConfigAndroid;
      } else if (RN.Platform.OS === 'ios') {
        return firebaseConfigIOS;
      }
    }
  } catch (e) {
    // If React Native is not available, we're on web
  }
  return firebaseConfigWeb;
}

const firebaseConfig = getFirebaseConfig();

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with optional persistence for React Native
let auth;
try {
  const RN = require('react-native');
  if (RN.Platform && (RN.Platform.OS === 'ios' || RN.Platform.OS === 'android')) {
    // Use persistence for mobile
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage)
    });
  } else {
    // Web auth without persistence
    auth = getAuth(app);
  }
} catch (e) {
  // Fallback for web
  auth = getAuth(app);
}

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };
