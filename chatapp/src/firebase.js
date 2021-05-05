import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCMEE34BbqCQ_ZNEjsuQ_ShOp-MJMcR65w",
    authDomain: "cloud-chatapp.firebaseapp.com",
    projectId: "cloud-chatapp",
    storageBucket: "cloud-chatapp.appspot.com",
    messagingSenderId: "956795961950",
    appId: "1:956795961950:web:ae6fe6c54d38b6f6442acf",
    measurementId: "G-3ML40Z0WNR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  export default firebase;