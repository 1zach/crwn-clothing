

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAI39Ar3paWHV-v-2Mh6zU_BR4gywbHCUo",
  authDomain: "crwn-clothing-ba0a1.firebaseapp.com",
  projectId: "crwn-clothing-ba0a1",
  storageBucket: "crwn-clothing-ba0a1.appspot.com",
  messagingSenderId: "178661453206",
  appId: "1:178661453206:web:da914adbef7f9fd672c1b7",
  measurementId: "G-M91HKSVZTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  const userDocRef = doc(db, "users", userAuth.uid)


const userSnapshot = await getDoc(userDocRef);
console.log(userSnapshot)
console.log(userSnapshot.exists())

if(!userSnapshot.exists()) {
  const {displayName, email} = userAuth
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalInformation
    });
  } catch (error) {
    console.log("error creating the user", error.message)
    
  }
}
 return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}


export const authSignInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
  
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)