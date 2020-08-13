import firebase from 'firebase/app';
import 'firebase/database';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBAS43lg_WI123l9Z9of_CAKI0hPh2iyOM",
    authDomain: "rpg-generator-app.firebaseapp.com",
    databaseURL: "https://rpg-generator-app.firebaseio.com",
    projectId: "rpg-generator-app",
    storageBucket: "rpg-generator-app.appspot.com",
    messagingSenderId: "484600857550",
    appId: "1:484600857550:web:78f4db991a49718e5fe19f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;