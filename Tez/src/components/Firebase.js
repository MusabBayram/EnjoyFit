import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyDypg3bN875-HCpQum9kZTrYWYfUZuDeTU',
    authDomain: 'enjoyfit.firebaseapp.com',
    projectId: 'enjoyfit',
    storageBucket: 'enjoyfit.appspot.com',
    messagingSenderId: '646713800582',
    appId: '1:646713800582:web:f2575282c4eca13ab75e07',
    measurementId: 'G-YBE36EZCY5'
  }

const FbApp = firebase.initializeApp(firebaseConfig)

export default FbApp.auth();