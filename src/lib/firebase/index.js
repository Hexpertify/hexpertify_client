// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEPSVO95YDyWun5b5GlXyaP1GuALqos2o",
  authDomain: "fire-dafbd.firebaseapp.com",
  projectId: "fire-dafbd",
  storageBucket: "fire-dafbd.appspot.com",
  messagingSenderId: "558566165415",
  appId: "1:558566165415:web:f70062da9c4ab1b7ba4482",
  measurementId: "G-L781HHP7C9",
};
export const firebaseApp = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();
