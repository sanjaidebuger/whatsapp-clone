import {initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyA_nRCQVVkBpKeDVrbh9R_zOPvtve1F9gI",
  authDomain: "whatsup-mern-f8ad3.firebaseapp.com",
  projectId: "whatsup-mern-f8ad3",
  storageBucket: "whatsup-mern-f8ad3.appspot.com",
  messagingSenderId: "843762784917",
  appId: "1:843762784917:web:d7cb1d399db0a29f2a199c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {app, auth, provider}