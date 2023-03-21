import {getApp, getApps, initializeApp} from"firebase/app"
import {getStorage} from "firebase/storage"

const firebaseConfig = {

  apiKey: "AIzaSyA2XLsE-kgl6MZk9Dpc5JEAreHV5uvLRvM",

  authDomain: "musicapp-f2ac2.firebaseapp.com",

  projectId: "musicapp-f2ac2",

  storageBucket: "musicapp-f2ac2.appspot.com",

  messagingSenderId: "613860787426",

  appId: "1:613860787426:web:e32ba638839e56510e0abb",

  measurementId: "G-ZZ0L350PW1"

};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app)

export {app, storage}
