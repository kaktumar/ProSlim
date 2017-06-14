const functions = require('firebase-functions');
const { config: { name },
        config: { apiKey },
        config: { authDomain },
        config: { databaseURL },
        config: { projectId },
        config: { storageBucket },
        config: { messagingSenderId },
      } = require('./config');
const { hello_world } = require('./routes');

console.log(name);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest(hello_world);
