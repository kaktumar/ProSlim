const functions = require('firebase-functions');
const config = require('./../config');

console.log(config.name);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('HELLO WORUDO - Gio');
});
