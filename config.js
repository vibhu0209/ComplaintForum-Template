import firebase from 'firebase'
require("@firebase/firestore")
const firebaseConfig = {
    apiKey: "AIzaSyDlrNlAkkJbXodbd5AGMfAY1gUAsd3M0kU",
    authDomain: "helping-hand-complaints.firebaseapp.com",
    projectId: "helping-hand-complaints",
    storageBucket: "helping-hand-complaints.appspot.com",
    messagingSenderId: "151048581460",
    appId: "1:151048581460:web:e80daa5f981b5b2f1318c1"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

