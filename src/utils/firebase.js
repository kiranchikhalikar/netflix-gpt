// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1qTxt2RVmghZnPoco7JEpSJrAVI7tzww",
  authDomain: "netflix-4e95b.firebaseapp.com",
  projectId: "netflix-4e95b",
  storageBucket: "netflix-4e95b.appspot.com",
  messagingSenderId: "762114866477",
  appId: "1:762114866477:web:2a94bd3fcb5b6f204967a4",
  measurementId: "G-05H91879HZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
