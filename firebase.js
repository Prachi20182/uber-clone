import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {

  apiKey: "AIzaSyBk8eJlErjabJXU08vixI3zz3pXZmZYloc",

  authDomain: "uber-next-9326a.firebaseapp.com",

  projectId: "uber-next-9326a",

  storageBucket: "uber-next-9326a.appspot.com",

  messagingSenderId: "955478379219",

  appId: "1:955478379219:web:0b015f594122abc1a92226"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth }