import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_DB_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_DB_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_DB_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_DB_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_ID_MESSAGINGID,
  appId: process.env.NEXT_PUBLIC_DB_APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();



const db = getFirestore(app);

export const saveUserToFirestore = async (user: { uid: any; displayName: any; email: any; photoURL: any; }) => {
  const { uid, displayName, email, photoURL } = user;
  try {
    await addDoc(collection(db, "usersData"), {
      uid: uid,
      displayName: displayName,
      email: email,
      photoURL: photoURL,
    });
    console.log("Document successfully written!");
  } catch (error) {
    console.error("Error writing document: ", error);
  }
}
