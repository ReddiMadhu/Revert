// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHORCyTsBsHpKNeRuJ9IsjTbkga_K_q5w",
  authDomain: "rever-7f2c6.firebaseapp.com",
  projectId: "rever-7f2c6",
  storageBucket: "rever-7f2c6.appspot.com",
  messagingSenderId: "230615092076",
  appId: "1:230615092076:web:30818f5409c03e4c210149"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

