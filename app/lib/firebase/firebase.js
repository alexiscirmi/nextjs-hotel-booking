import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: 'marcotel-6d7f8.firebaseapp.com',
  projectId: 'marcotel-6d7f8',
  storageBucket: 'marcotel-6d7f8.appspot.com',
  messagingSenderId: '73207469002',
  appId: '1:73207469002:web:ce4bed5b5e8ad77807f533'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)