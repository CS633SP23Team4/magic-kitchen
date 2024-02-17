import { initializeApp } from "firebase/app"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
export const db = getFirestore(firebaseApp)

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

export async function pushUserRecipe(user, data) {
  try {
    await setDoc(doc(db, "userRecipes", data.id), { data }, { merge: true })
  } catch (error) {
    console.error(error)
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
