import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/functions';

//----------------------------------------
// condig
//----------------------------------------
const config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
};

//----------------------------------------
// initialize firebase
//----------------------------------------
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const isEmulator = window.location.hostname === 'localhost';
const db = firebase.firestore();
const functions = firebase.app().functions(isEmulator ? 'us-central1' : 'asia-northeast1'); // us-central1じゃないとemulatorが動かない
const auth = firebase.auth();

// localhostの場合はEmulatorにつなぐ
if (isEmulator) {
  db.useEmulator('localhost', 8080);
  functions.useEmulator('localhost', 5051);
  auth.useEmulator('http://localhost:9099/');
}

export { db, functions, auth };
