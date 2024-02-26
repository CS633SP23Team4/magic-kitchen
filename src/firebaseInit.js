import { initializeApp } from "firebase/app"
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth"
import {
  doc,
  addDoc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore"

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

export const resetPassword = async (userId) => {
  const user = await getCurrentUserData(userId)
  const email = user.email
  return sendPasswordResetEmail(auth, email)
    .then(() => {
      return "Success! An email has been sent for you to reset your password."
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.error(errorMessage, errorCode)
      return errorMessage
    })
}

export async function getUserRecipes(user) {
  const recipeQuery = query(collection(db, "userRecipes"), where("UserId", "==", user))
  const querySnapshot = await getDocs(recipeQuery)
  const recipeArray = []
  querySnapshot.forEach((doc) => {
    const document = { ...doc.data(), id: doc.id }
    recipeArray.push(document)
  })
  return recipeArray
}

export async function pushUserRecipe(userId, recipeData) {
  try {
    const docRef = await addDoc(collection(db, "userRecipes"), recipeData)
    // const link = await addDoc(collection(db,'/users', userId,'MadeRecipe'),docRef.id)
    console.log("Document written with ID: ", docRef.id)
    return true // Indicate success
  } catch (error) {
    console.error("Error adding recipe: ", error)
    return false // Indicate failure
  }
}

export async function getUserFavorites(user) {
  const querySnapshot = await getDocs(collection(db, "users", user, "LikedRecipes"))
  const recipeArray = []
  querySnapshot.forEach((doc) => {
    const document = { ...doc.data(), id: doc.id }
    recipeArray.push(document)
  })
  return recipeArray
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

export const getCurrentUserData = async (user) => {
  const userRef = doc(db, "users", user)
  const userSnap = await getDoc(userRef)
  if (userSnap.exists()) {
    return userSnap.data()
  }
}
