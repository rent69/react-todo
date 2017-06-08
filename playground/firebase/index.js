import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.projectId,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
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
  });

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Drain the swamp',
 });

 todosRef.push({
 text: 'Fill the pool'
 });





// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the Dog!'
// });
// console.log('Note id', newNoteRef.key);
//
//   // firebaseRef.child('app').update({
//   //   name: 'Todo Application'
//   // });
//   // firebaseRef.child('user').update({
//   //   name: 'Lex'
//   // });
//
//   // firebaseRef.child('app/name').remove();
//
// // firebaseRef.child('app').update({
// //   version: '2.0',
// //   name: null
// // });
// //
// // firebaseRef.update({
// //   isRunning: null
// // });
// //
// // firebaseRef.child('user/age').remove();
//
// // firebaseRef.child('app').once('value').then((snapshot) => {
// //   console.log('Got entire database', snapshot.key, snapshot.val());
// // }, (e) => {
// //   console.log('Unable to fetch value', e);
// // });
//
// // var logData = (snapshot) => {
// // console.log('Got value', snapshot.val());
// // }
// // firebaseRef.on('value', logData);
// // firebaseRef.off(logData);
// // );
// //
// // // firebaseRef.off();
// //
// // firebaseRef.update({isRunning: false})
//
// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User ref changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({name: 'Mike'});
// firebaseRef.child('app').update({name: 'Something Else!'});
