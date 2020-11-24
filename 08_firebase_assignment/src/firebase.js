import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyD79Q5p84UK6xzSr4zpLv3zEztbLUWcX1s",
    authDomain: "crud-operation-7e193.firebaseapp.com",
    databaseURL: "https://crud-operation-7e193.firebaseio.com",
    projectId: "crud-operation-7e193",
    storageBucket: "crud-operation-7e193.appspot.com",
    messagingSenderId: "869321966396",
    appId: "1:869321966396:web:96da2c0e4ae01ff53d5439"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();