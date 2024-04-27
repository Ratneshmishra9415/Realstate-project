// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rvr-estate.firebaseapp.com",
  projectId: "rvr-estate",
  storageBucket: "rvr-estate.appspot.com",
  messagingSenderId: "161628194215",
  appId: "1:161628194215:web:ff78c05a176e0055b36282"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);