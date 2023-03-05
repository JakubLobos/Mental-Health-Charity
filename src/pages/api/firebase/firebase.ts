import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc, Firestore } from "firebase/firestore/lite";
import { useAuthState } from 'react-firebase-hooks/auth';

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

export const db:Firestore = getFirestore(app);

export const saveToFirestore = async (user: { uid: any; displayName: any; email: any; photoURL: any; }, docName: "usersData" | "menteeForms" | string, data?: Array<object> | object) => {
  const { uid, displayName, email, photoURL } = user;
  try {
    await setDoc(doc(db, docName, uid), {
      uid: uid,
      displayName: displayName,
      email: email,
      photoURL: photoURL,
      data: data,
    }, {merge: true});
    console.log("Document successfully written!");
  } catch (error) {
    console.error("Error writing document: ", error);
  }
}

export const saveVolunteer = async (user: { uid: any; displayName: any; email: any; photoURL: any; }, selectedVolunteerUID:string, data?: object, ) => {
  const { uid, displayName, email, photoURL } = user;
  const collectionName:string = selectedVolunteerUID;
  const documentName = uid;

  try {
    const collectionRef = collection(db, collectionName);
    const documentRef = doc(collectionRef, documentName);
    await setDoc(documentRef, data ? data : {});
    console.log(`Document ${documentName} successfully written in collection ${collectionName}!`);
  } catch (error) {
    console.error(`Error writing document ${documentName} in collection ${collectionName}: `, error);
  }
}