// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgRLovMRnXz9l1UWomhA0hTQyZFsCRZTI",
  authDomain: "viverojoako.firebaseapp.com",
  projectId: "viverojoako",
  storageBucket: "viverojoako.appspot.com",
  messagingSenderId: "1029409970865",
  appId: "1:1029409970865:web:02db7ef39ec33ae1482090"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;