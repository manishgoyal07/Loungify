import React from 'react'
import { auth, provider } from '../firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";


const Signup = () => {

    const handleLogin = ()=>{
        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }


const handleLogout = ()=>{

signOut(auth).then(() => {
    console.log("Logged out");
  // Sign-out successful.
}).catch((error) => {
    console.log(error);
  // An error happened.
});
}

  return (
    <>
    <button className='m-2 bg-red-400 p-2' onClick={handleLogin}>Signup with Google</button>
    <button className='m-2 bg-red-400 p-2' onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Signup