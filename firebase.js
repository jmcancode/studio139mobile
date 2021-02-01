import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBqK4lsbvnf-MnA80jG8Bsh53jFChQwmJA",
  authDomain: "studio-139.firebaseapp.com",
  projectId: "studio-139",
  storageBucket: "studio-139.appspot.com",
  messagingSenderId: "421065916322",
  appId: "1:421065916322:web:f0e76674287e27c4b1fcfb",
  measurementId: "G-F5BP4Q7D9C",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth, firebase };
