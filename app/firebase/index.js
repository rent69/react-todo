import firebase from 'firebase';

try {
  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyA4v9cug9bPWzy2-HXfL1SLcH-OLJn2irU",
      authDomain: "rs-todo-app.firebaseapp.com",
      databaseURL: "https://rs-todo-app.firebaseio.com",
      projectId: "rs-todo-app",
      storageBucket: "rs-todo-app.appspot.com",
      messagingSenderId: "617347898910"
    };

    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef =  firebase.database().ref();
export default firebase;
