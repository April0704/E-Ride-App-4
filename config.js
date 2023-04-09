import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyAe59jjppYE5F7FFelw1-En0Mg9nTPOBSY",
  authDomain: "e-ride-app-5513f.firebaseapp.com",
  projectId: "e-ride-app-5513f",
  storageBucket: "e-ride-app-5513f.appspot.com",
  messagingSenderId: "669549611708",
  appId: "1:669549611708:web:66a4dec3f376a9bf27deb9"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
