// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcstEWaVhbpVWbMMx0lamuQCi2YtRLLS8",
  authDomain: "hacknyu-233b7.firebaseapp.com",
  projectId: "hacknyu-233b7",
  storageBucket: "hacknyu-233b7.appspot.com",
  messagingSenderId: "1037169014520",
  appId: "1:1037169014520:web:32badc436b8ad64c11ed0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
