import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCovOA2zLDB42ysyVrArAE-Tq34luenkus",
  authDomain: "clychat.firebaseapp.com",
  databaseURL: "https://clychat.firebaseio.com",
  projectId: "clychat",
  storageBucket: "clychat.appspot.com",
  messagingSenderId: "232593090435",
  appId: "1:232593090435:web:a01c8b94771c56633638b6"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb };
