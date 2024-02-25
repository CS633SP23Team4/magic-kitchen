import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAmx2m9NxMjIy5Iy94fwZdfKoT44P57t2o",
  authDomain: "magic-kitchen-b5f37.firebaseapp.com",
  projectId: "magic-kitchen-b5f37",
  storageBucket: "magic-kitchen-b5f37.appspot.com",
  messagingSenderId: "275863630421",
  appId: "1:275863630421:web:29d06a1eddcc79e21e5adc",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
console.log(firebaseConfig)
const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    return user
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}
