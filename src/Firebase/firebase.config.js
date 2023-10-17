// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_NWmraSqOwsvwNWWy_iFMsPSE_Ow1J4A",
  authDomain: "brand-cars-assignment-auth.firebaseapp.com",
  projectId: "brand-cars-assignment-auth",
  storageBucket: "brand-cars-assignment-auth.appspot.com",
  messagingSenderId: "611741042187",
  appId: "1:611741042187:web:187ae2d8a0670107efa90e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;