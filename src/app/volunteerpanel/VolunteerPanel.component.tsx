import { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPopUp from "../../common/components/loginpopup/LoginPopUp.component";
import GlobalStyle from "../../common/styles/Global.style";
import { auth, saveToFirestore, saveVolunteer } from "../../pages/api/firebase/firebase";
import StyledVolunteerPanel from "./VolunteerPanel.style";


const VolunteerPanel: FC = () => {

    const [user] = useAuthState(auth);


    const HandleRegister = (e:any) => {
        e.preventDefault();
        user ? saveVolunteer(user, "37337373282837374", {name: user.displayName, photo: user.photoURL, content: "Siema, to ja"}) : <LoginPopUp allowExit={false} />;
    }

    return (
        <StyledVolunteerPanel>
            <GlobalStyle />
            <h1>Witaj w panelu</h1>
            <form>
                <input onClick={(e) => HandleRegister(e)} type={"submit"} value={"Zarejestruj"} />    
            </form>
            <p>DEBUG MODE</p>
        </StyledVolunteerPanel>
    )
};

export default VolunteerPanel;