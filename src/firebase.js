import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const analytics = getAnalytics(app);
  export const provider = new GoogleAuthProvider();
