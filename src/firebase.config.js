// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_sskCmXMulsZpgfLxU5RxRl7tsVZD4sE",
  authDomain: "project-bf435.firebaseapp.com",
  projectId: "project-bf435",
  storageBucket: "project-bf435.appspot.com",
  messagingSenderId: "288213759366",
  appId: "1:288213759366:web:8d99e46c36eccd892fa807",
  measurementId: "G-43NFGBX3ZP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig
