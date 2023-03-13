import { FC, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPopUp from "../../common/components/loginpopup/LoginPopUp.component";
import GlobalStyle from "../../common/styles/Global.style";
import { auth, db, saveChatMessage, saveToFirestore } from "../../pages/api/firebase/firebase";
import StyledVolunteerPanel from "./VolunteerPanel.style";
import { useDocumentData, useCollectionData, useCollection } from 'react-firebase-hooks/firestore';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const VolunteerPanel: FC = () => {

    const [user] = useAuthState(auth);

    const HandleRegister = (e:any) => {
        e.preventDefault();
        user ? saveChatMessage(user, "Vol_TESTUID_BBBBBB", "Ment_TESTUID_BBBBB1", "Pierwsza wiadomosc z innym wolontariuszem i innym podopiecznym") : <LoginPopUp allowExit={false} />;
    }

    const getFireStore = async () => {
        const querySnapshot = await getDocs(collection(db, "menteeForms"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        })
    }

    return (
        <StyledVolunteerPanel>
            <GlobalStyle />
            <h1>Witaj w panelu</h1>
            <form>
                <input onClick={(e) => HandleRegister(e)} type={"submit"} value={"Zarejestruj"} />    
            </form>
            <p>DEBUG MODE</p>
            <button onClick={() => console.log(user?.getIdTokenResult().then((idTokenResul:any) => {
                const result = idTokenResul.claims.user_id
                console.log(result);
                console.log("ONLY FOR DEBUG MODE")
            }))}>getTokenUID</button>
            <ul>
                <button onClick={() => console.log(getFireStore())}>GETFIRESTORE</button>
                {

                }
            </ul>
        </StyledVolunteerPanel>
    )
};

export default VolunteerPanel;