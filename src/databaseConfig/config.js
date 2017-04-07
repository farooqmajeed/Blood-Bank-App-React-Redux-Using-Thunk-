import firebase from 'firebase';
 var config = {
    apiKey: "AIzaSyAClss-FAiqGfl2c5Dj5Dx6PF8mJIlvjRY",
    authDomain: "myblood-app.firebaseapp.com",
    databaseURL: "https://myblood-app.firebaseio.com",
    projectId: "myblood-app",
    storageBucket: "myblood-app.appspot.com",
    messagingSenderId: "387412863389"
  };
  firebase.initializeApp(config);

   export const database = firebase.database();
   export const fbAuth = firebase.auth();
