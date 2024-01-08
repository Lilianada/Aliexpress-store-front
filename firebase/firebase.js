// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFgD5DY3ocYMdy-hoYiQYPh7xC1InIph0",
  authDomain: "aliexpress-storefront.firebaseapp.com",
  projectId: "aliexpress-storefront",
  storageBucket: "aliexpress-storefront.appspot.com",
  messagingSenderId: "712029773039",
  appId: "1:712029773039:web:4755d70757c44540024f1a",
  measurementId: "G-N8ZQP7K059"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); 
export const storage = getStorage(app);