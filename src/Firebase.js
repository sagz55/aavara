import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDV5OEAL1BA18AIFU2WJvrjYJh_8k5OvRE",
    authDomain: "aavara-278fb.firebaseapp.com",
    projectId: "aavara-278fb",
    storageBucket: "aavara-278fb.appspot.com",
    messagingSenderId: "726869499091",
    appId: "1:726869499091:web:2c7dd49a99da789012c826",
    measurementId: "G-D3C9Z2V6SS"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  export{db}
 export default firebase;