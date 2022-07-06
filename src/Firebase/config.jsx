import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkfe9xsFhqarNcU69G-0I51vYat8KSt88",
  authDomain: "bookbuddy-4899c.firebaseapp.com",
  projectId: "bookbuddy-4899c",
  storageBucket: "bookbuddy-4899c.appspot.com",
  messagingSenderId: "569934733657",
  appId: "1:569934733657:web:41f9c466153cc11b932c48",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db,auth};