import firebase from "firebase/app"
import firebase from "firebase"
import "firebase/auth"
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyACmeR7RKz1k4nBj4UjZaEf6HP1jcxFlZ0",
  authDomain: "applist-637f3.firebaseapp.com",
  projectId: "applist-637f3",
  storageBucket: "applist-637f3.appspot.com",
  messagingSenderId: "316997411849",
  appId: "1:316997411849:web:eae2259f329f43df5e84d8",
  measurementId: "G-MWNEF6GESB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db} 