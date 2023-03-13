import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, doc, setDoc, Firestore } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

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

export const db = getFirestore(app);

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

export const saveChatMessage = async (user: { uid: any; displayName: any; email: any; photoURL: any; }, volunteerUID:string, menteeUID:string, data: string, ) => {
  try {
    // create collection if doesnt exist
    const chatsRef = collection(db, "chats");
    
    //create volunteer or get ref
    const volunteerDocRef = doc(chatsRef, volunteerUID);

    //create or get mentee collection in volunteer ref
    const menteeRef = collection(volunteerDocRef, menteeUID)

    //append message to volunteer
    await addDoc(menteeRef, {
      message: {name: user.displayName, content: data,},
    });
    console.log(`Document  successfully written in collection!`);
  } catch (error) {
    console.error(`Error writing document  in collection : `, error);
  }
}