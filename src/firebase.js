// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqcMMzvziUJ26by3utGmuM3Bvmoc1vu2A",
  authDomain: "register-b5abb.firebaseapp.com",
  projectId: "register-b5abb",
  storageBucket: "register-b5abb.firebasestorage.app",
  messagingSenderId: "981461599490",
  appId: "1:981461599490:web:c7fd45484884599bb6ae1b",
  measurementId: "G-851KEYDR1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);