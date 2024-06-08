import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDz53ZPnWMx6Db7sGbc3V4UUJZSkE5WJyA",
    authDomain: "loungify-272e4.firebaseapp.com",
    projectId: "loungify-272e4",
    storageBucket: "loungify-272e4.appspot.com",
    messagingSenderId: "723666507902",
    appId: "1:723666507902:web:ff7e85291c2022d8cba02f",
    measurementId: "G-15HNLVYBRQ"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const analytics = getAnalytics(app);
  export const provider = new GoogleAuthProvider();