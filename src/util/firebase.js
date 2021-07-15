import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCweuJwoh3FNsq5HHd_9zczDM-0qfTtKOM",
    authDomain: "todo-react-5c10f.firebaseapp.com",
    databaseURL:
        "https://todo-react-5c10f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todo-react-5c10f",
    storageBucket: "todo-react-5c10f.appspot.com",
    messagingSenderId: "1070627884029",
    appId: "1:1070627884029:web:6b675f87111a957509a794",
    measurementId: "G-87G149F8W1",
};

const functions = require("firebase/functions");

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
