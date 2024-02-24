import { initializeApp } from "firebase/app"

import { 
  GoogleAuthProvider, 
  getAuth,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth();
const googleProvider = new GoogleAuthProvider();


export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    return (user)

  } catch (err) {
    console.error(err);
    throw new Error(err)
  }
};


