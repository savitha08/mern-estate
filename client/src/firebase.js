// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2223f.firebaseapp.com",
  projectId: "mern-estate-2223f",
  storageBucket: "mern-estate-2223f.appspot.com",
  messagingSenderId: "131706719298",
  appId: "1:131706719298:web:414c279daeffa74052b1db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);