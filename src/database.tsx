// Connect to Firestore database

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlGvcUqy5dSt1-uIvmPrPLe-NnphpYWpc",
    authDomain: "childrensoundboard.firebaseapp.com",
    projectId: "childrensoundboard",
    storageBucket: "childrensoundboard.appspot.com",
    messagingSenderId: "616613667071",
    appId: "1:616613667071:web:52c5d81e188c8f42186cca",
    measurementId: "G-HX1528WJZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// Export app and db
export { app, db, storage };

