// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyANutQqG8OZzM1r9NB-OnQCOV-qBC4Mi78',
  authDomain: 'vuetest-15f70.firebaseapp.com',
  projectId: 'vuetest-15f70',
  storageBucket: 'vuetest-15f70.firebasestorage.app',
  messagingSenderId: '840190091767',
  appId: '1:840190091767:web:b898ca1fc0c8b84d92cef2',
};

// Initialize Firebase
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
