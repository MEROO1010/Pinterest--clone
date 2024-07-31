// Import the functions you need from the SDKs you need

import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFgDvu88Xq1sHgTfbVVc6tQQJ8U7lecp8",
  authDomain: "pinterest-clone-96fb7.firebaseapp.com",
  projectId: "pinterest-clone-96fb7",
  storageBucket: "pinterest-clone-96fb7.appspot.com",
  messagingSenderId: "406589116800",
  appId: "1:406589116800:web:063248ff5a225e41403165"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;