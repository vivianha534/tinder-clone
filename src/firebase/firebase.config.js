import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDM-wQ0o_4g1f9ZBIcio31sxmMtneQXTMg",
    authDomain: "tinder-clone-1d242.firebaseapp.com",
    databaseURL: "https://tinder-clone-1d242-default-rtdb.firebaseio.com",
    projectId: "tinder-clone-1d242",
    storageBucket: "tinder-clone-1d242.appspot.com",
    messagingSenderId: "713581617993",
    appId: "1:713581617993:web:823b15f7c8f3bda12b7098",
    measurementId: "G-0496B2PT3D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const database = firebase.firestore() 

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
}

export default firebase;