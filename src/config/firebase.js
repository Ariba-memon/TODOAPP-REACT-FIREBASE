import  firebase  from "firebase";
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAH_wVb-OwP2qPubk-FlanILBoauqq62Oc",
    authDomain: "todoappreact-7134f.firebaseapp.com",
    databaseURL:"https://todoappreact-7134f-default-rtdb.firebaseio.com/",
    projectId: "todoappreact-7134f",
    storageBucket: "todoappreact-7134f.appspot.com",
    messagingSenderId: "503408041204",
    appId: "1:503408041204:web:7c3fee76b6d0a0459092a1",
    measurementId: "G-4FWD5VGS3Q"
  };
  // Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);