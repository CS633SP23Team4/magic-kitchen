import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
console.log(firebaseConfig)
//
// export const auth = getAuth(app)
// const googleProvider = new GoogleAuthProvider()
//
// export const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider)
//     const user = res.user
//     return user
//   } catch (err) {
//     console.error(err)
//     throw new Error(err)
//   }
// }
//
// export const localSignIn = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(auth, email, password)
//     if (userCredential) {
//       return userCredential.user
//     }
//   } catch (e) {
//     console.error(e)
//   }
// }
