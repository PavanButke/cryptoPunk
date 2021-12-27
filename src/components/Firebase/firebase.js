import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AuthProvider from './AuthProvider';





const firebaseConfig = {
    apiKey: "AIzaSyCmc9e4qULTb89PDQXSqONRN8kCPZCIqXc",
    authDomain: "cryptopunk-3cde7.firebaseapp.com",
    projectId: "cryptopunk-3cde7",
    storageBucket: "cryptopunk-3cde7.appspot.com",
    messagingSenderId: "330639650482",
    appId: "1:330639650482:web:4926426ecbdf6d99dbe3ab"
  };

  firebase.initializeApp(firebaseConfig);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore()
  export const storage = firebase.storage();

  export const signInWithGoogle =()=>
  {
      auth.signInWithPopup(Provider);
  };

  export default firebase;