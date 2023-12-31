// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOyM_4bV-Gi6dGDZEmRBNY4PWiJauecwc",
  authDomain: "blog-project-28c29.firebaseapp.com",
  projectId: "blog-project-28c29",
  storageBucket: "blog-project-28c29.appspot.com",
  messagingSenderId: "955239358716",
  appId: "1:955239358716:web:8c23c6f2f15a67d8707779"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();