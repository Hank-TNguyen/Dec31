var admin = require("firebase-admin");
var debug = require('debug')('jul17:server');
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://perblog-7fc1a.firebaseio.com"
});

debug("firebase app activated");

var firebase = require('firebase/app');
require("firebase/auth");
require("firebase/database");

var config = {
    apiKey: "AIzaSyB3_EQYTH669SXLgUGwYToPu1a_M6zU0u0",
    authDomain: "perblog-7fc1a.firebaseapp.com",
    databaseURL: "https://perblog-7fc1a.firebaseio.com",
    projectId: "perblog-7fc1a",
    storageBucket: "perblog-7fc1a.appspot.com",
    messagingSenderId: "660192562269"
  };

firebase.initializeApp(config);

var database = firebase.database();

module.exports = {
    writeUserData: function(userId, name, email, imageUrl) {
        console.log("writing user: ", userId, name, email, imageUrl);
        database.ref('users/' + userId).set({
            username: name,
            email: email,
            profile_picture : imageUrl
        });
    }
}