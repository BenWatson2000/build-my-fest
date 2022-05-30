// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5WHzd7JKU03HKiFm8YkIJ_ZOPxG9G46I",
  authDomain: "build-my-fest.firebaseapp.com",
  projectId: "build-my-fest",
  storageBucket: "build-my-fest.appspot.com",
  messagingSenderId: "133592199785",
  appId: "1:133592199785:web:e0a12d25a8f5bf511428f8",
  measurementId: "G-1384H0QN04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Hello World")