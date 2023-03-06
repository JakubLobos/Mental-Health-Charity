import { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPopUp from "../../common/components/loginpopup/LoginPopUp.component";
import GlobalStyle from "../../common/styles/Global.style";
import { auth, saveChatMessage, saveToFirestore } from "../../pages/api/firebase/firebase";
import StyledVolunteerPanel from "./VolunteerPanel.style";


const VolunteerPanel: FC = () => {

    const [user] = useAuthState(auth);

    const HandleRegister = (e:any) => {
        e.preventDefault();
        user ? saveChatMessage(user, "Vol_TESTUID_BBBBBB", "Ment_TESTUID_BBBBB1", "Pierwsza wiadomosc z innym wolontariuszem i innym podopiecznym") : <LoginPopUp allowExit={false} />;
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
        </StyledVolunteerPanel>
    )
};

export default VolunteerPanel;