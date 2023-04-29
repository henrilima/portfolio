const firebase = require("firebase");
const bancodedados = require("shorten-firebase.realtime-database");

const firebaseConfig = {
  apiKey: "AIzaSyCSgaFMyviJH8FS6Q1belsccMtY8i9LS0Q",
  authDomain: "snake-80f56.firebaseapp.com",
  projectId: "snake-80f56",
  storageBucket: "snake-80f56.appspot.com",
  messagingSenderId: "979803307535",
  appId: "1:979803307535:web:a0484cd2778fe01c9eed7a"
};

try {
    firebase.initializeApp(firebaseConfig);
    console.log("Conectado ao banco de dados!");
} catch (err) {
    console.log(err);
}
const database = new bancodedados(firebase, false);

module.exports = {
    database,
    firebase,
};
