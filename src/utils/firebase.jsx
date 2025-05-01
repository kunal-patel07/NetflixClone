// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsd47yEL5XzuS8lW4d9446SagFzHhItFM",
  authDomain: "netflixgpt-1ee34.firebaseapp.com",
  projectId: "netflixgpt-1ee34",
  storageBucket: "netflixgpt-1ee34.firebasestorage.app",
  messagingSenderId: "938858086930",
  appId: "1:938858086930:web:89bec62d207ee0c321cecb",
  measurementId: "G-MES3M5YYDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();