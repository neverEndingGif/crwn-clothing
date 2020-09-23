import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNV7pbcLte8gcMw50CrBvAwwMXSIhk00w",
  authDomain: "crwn-db-aa731.firebaseapp.com",
  databaseURL: "https://crwn-db-aa731.firebaseio.com",
  projectId: "crwn-db-aa731",
  storageBucket: "crwn-db-aa731.appspot.com",
  messagingSenderId: "753105287031",
  appId: "1:753105287031:web:f6733703757f433e0f5372",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
