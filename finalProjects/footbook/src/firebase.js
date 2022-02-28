import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyDpH-mlBI2M4_Iia8lff8h3Hgu-bDeNrW0",
    authDomain: "footbook-75b38.firebaseapp.com",
    projectId: "footbook-75b38",
    storageBucket: "footbook-75b38.appspot.com",
    messagingSenderId: "900835082116",
    appId: "1:900835082116:web:b75a3e89bb3bdf448be7d1",
    measurementId: "G-YH6EE5NZQM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider =  new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;