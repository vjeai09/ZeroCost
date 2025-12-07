// Firebase config for XENEX AI
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  initializeAuth,
  getReactNativePersistence 
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Multi-platform Firebase config
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
  appId: "1:905133111716:android:6585a0cd804be124e46931"
};

const firebaseConfigIOS = {
  apiKey: "AIzaSyBqC5RqXy53EbuIWd3Yi6RprMbVSKbYSiA",
  authDomain: "xenexai-b8806.firebaseapp.com",
  projectId: "xenexai-b8806",
  storageBucket: "xenexai-b8806.firebasestorage.app",
  messagingSenderId: "905133111716",
  appId: "1:905133111716:ios:53332fa8c0488b06e46931"
};

let firebaseConfig;
if (Platform.OS === 'web') {
  firebaseConfig = firebaseConfigWeb;
} else if (Platform.OS === 'android') {
  firebaseConfig = firebaseConfigAndroid;
} else if (Platform.OS === 'ios') {
  firebaseConfig = firebaseConfigIOS;
} else {
  firebaseConfig = firebaseConfigWeb; // fallback
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with persistence for React Native
let auth;
if (Platform.OS === 'web') {
  auth = getAuth(app);
} else {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
}

// Initialize Firestore
export const db = getFirestore(app);
export { auth };
