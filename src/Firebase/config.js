import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

let api_,auth_,database_,project_,storage_,msg_,app_;
if(process.env.NODE_ENV !== 'production'){
  api_= process.env.REACT_APP_API;
  auth_= process.env.REACT_APP_AUTH;
  database_= process.env.REACT_APP_DATABASE;
  project_= process.env.REACT_APP_PROJECT;
  storage_= process.env.REACT_APP_STORAGE;
  msg_= process.env.REACT_APP_MESSAGE;
  app_= process.env.REACT_APP_APP;
}
else{
  api_= process.env.API;
  auth_= process.env.AUTH;
  database_= process.env.DATABASE;
  project_= process.env.PROJECT;
  storage_= process.env.STORAGE;
  msg_= process.env.MESSAGE;
  app_= process.env.APP;
}

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: api_,
  authDomain: auth_,
  databaseURL: database_,
  projectId: project_,
  storageBucket: storage_,
  messagingSenderId: msg_,
  appId: app_
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const splashStorage = firebase.storage();
const splashFire = firebase.firestore();
const splashTime = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();

export {splashStorage, splashFire, splashTime, auth};