// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWaQ1XmFk3HSveQtZwE0piOsZ57qL58OE",
  authDomain: "insta-clone-next-c1d22.firebaseapp.com",
  projectId: "insta-clone-next-c1d22",
  storageBucket: "insta-clone-next-c1d22.appspot.com",
  messagingSenderId: "179021248718",
  appId: "1:179021248718:web:5a7c58eb6e67bbd0eb789f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };