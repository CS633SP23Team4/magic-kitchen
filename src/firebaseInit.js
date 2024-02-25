import { initializeApp } from "firebase/app"
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth"
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore"

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
export const db = getFirestore(app)
export const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    await addUserFirestore(user)
    return user
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}

export const RegisterLocal = async (email, password) => {
  try {
    // Create a new user with email and password using firebase
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    await addUserFirestore(userCredential.user)
  } catch (e) {
    throw new Error(e)
  }
}
export const addUserFirestore = async (user) => {
  // check if user exists; if not, add them to db
  const userRef = doc(db, "users", user.uid)
  const userSnap = await getDoc(userRef)
  if (!userSnap.exists()) {
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
    })
  }
}
