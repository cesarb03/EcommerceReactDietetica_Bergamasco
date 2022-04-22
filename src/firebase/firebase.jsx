// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvpPsLc2XfLXiIEw-sJEfscKA01jyy4Wk",
  authDomain: "ecommercereactdietetica.firebaseapp.com",
  projectId: "ecommercereactdietetica",
  storageBucket: "ecommercereactdietetica.appspot.com",
  messagingSenderId: "14909450897",
  appId: "1:14909450897:web:ed88b77fba1b3be52c6d30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)