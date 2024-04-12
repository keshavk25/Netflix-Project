import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnKWdnVJfmDO-CG43HyjRBClmd-YmgZVY",
  authDomain: "netflix-pro-1.firebaseapp.com",
  projectId: "netflix-pro-1",
  storageBucket: "netflix-pro-1.appspot.com",
  messagingSenderId: "818123486800",
  appId: "1:818123486800:web:9229e2cbc9f33f97bbc355",
  measurementId: "G-E7EJ51MC9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();