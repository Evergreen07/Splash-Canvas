import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_API,
  authDomain: process.env.REACT_APP_AUTH,
  databaseURL: process.env.REACT_APP_DATABASE,
  projectId: process.env.REACT_APP_PROJECT,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESSAGE,
  appId: process.env.REACT_APP_APP
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const splashStorage = firebase.storage();
const splashFire = firebase.firestore();
const splashTime = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();

export {splashStorage, splashFire, splashTime, auth};