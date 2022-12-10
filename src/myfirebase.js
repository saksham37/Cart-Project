// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGp93xUI5Huimwfzzo9u0XtHJ-Q6J-Q7E",
  authDomain: "cart-53a4f.firebaseapp.com",
  projectId: "cart-53a4f",
  storageBucket: "cart-53a4f.appspot.com",
  messagingSenderId: "586521425842",
  appId: "1:586521425842:web:802eff8d2e5d92d945d6ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;