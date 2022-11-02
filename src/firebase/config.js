import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBM8nZmPidm9kgEIgslB9Sbt83ZcrN3aoc",
    authDomain: "fir-c6c69.firebaseapp.com",
    projectId: "fir-c6c69",
    storageBucket: "fir-c6c69.appspot.com",
    messagingSenderId: "85473696514",
    appId: "1:85473696514:web:4c6968124ffe34d177801b",
    measurementId: "G-G2X04HYWGJ"
  };

export default firebase.initializeApp(firebaseConfig)