// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwcGkX0IAr3col3kDohexyV_gZkmYD3iY",
    authDomain: "winter-bear-client.firebaseapp.com",
    projectId: "winter-bear-client",
    storageBucket: "winter-bear-client.appspot.com",
    messagingSenderId: "227254661864",
    appId: "1:227254661864:web:d00132db7a8b73a62c4f5d",
    measurementId: "G-7YT6H46HD3"
  };

// Initialize Firebase
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
    prompt: "select_account "
});
export const auth = getAuth();
// Function to sign in with Google Popup
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); // Function to sign in with Google Popup

// Function to send OTP via SMS
