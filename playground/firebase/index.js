import firebase from 'firebase';

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

var firebaseRef = firebase.database().ref();
  firebaseRef.set({
    app: {
      name: 'Todo App',
      version: '0.0.1'
    },
    isRunning: true,
    user: {
      name: 'Rent',
      age: 53
    }
  }).then(() => {
    console.log('Set worked!')
  }, (e) => {
    console.log('Set failed')
  })

  //var firebaseRef = firebase.database().ref();
  //  firebaseRef.set({
  //    appName: 'Todo Application',
  //  });

    firebaseRef.child('app').set(
      {
      name: 'Todo Application'
    })

    firebaseRef.child('user').set(
      {
      name: 'Lex',
      age: 54
    })
