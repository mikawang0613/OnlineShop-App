import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCXY_RFVjsKzyQTRjN-_gjUfrQUiPPRaGI",
    authDomain: "e-commerce-db-398b6.firebaseapp.com",
    projectId: "e-commerce-db-398b6",
    storageBucket: "e-commerce-db-398b6.appspot.com",
    messagingSenderId: "943963074155",
    appId: "1:943963074155:web:87f0248568180f8461cb2e"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //create the provider because we want to make sure that we are using the google auth provider
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase; 

