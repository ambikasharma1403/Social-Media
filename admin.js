const admin = require("firebase-admin");
var serviceAccount = require("../key/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socmed-d27e7.firebaseio.com",
  storageBucket: "socmed-d27e7.appspot.com"
});

const db = admin.firestore();
module.exports = {admin, db};