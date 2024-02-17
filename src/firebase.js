// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9rkwQcUUHUcC2inst4Ob5GUXP9cFzmow",
  authDomain: "clone-22501.firebaseapp.com",
  projectId: "clone-22501",
  storageBucket: "clone-22501.appspot.com",
  messagingSenderId: "845599762025",
  appId: "1:845599762025:web:276a7e6cd140f65bdca4f8",
  measurementId: "G-NKE4C0D9L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db= app.db;
const auth= getAuth(app);//For accesing authentication fucntions.

export { db, auth };