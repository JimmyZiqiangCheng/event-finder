// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { message } from "antd";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebase";
import { formatUser } from "../utils/helperFunctions";

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = formatUser(userCredential.user);
    message.success(`${user.name} signed up successfully.`);
  } catch (error) {
    message.error(error.message);
  }
};

export const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = formatUser(userCredential.user);
    message.success(`${user.name} logged in successfully.`);
  } catch (error) {
    message.error(error.message);
  }
};

export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = formatUser(result.user);
    message.success(`${user.name} Login Successful.`);
  } catch (error) {
    message.error(error.message);
  }
};

export const logOutUser = async () => {
  try {
    await signOut(auth);
    message.success("Logout Successful.");
  } catch (error) {
    message.error(error.message);
  }
};
