import { FC } from "react";
import colorPallete from "../../common/styles/colorpalette";
import MainLayout from "../layout/main/MainLayout.component";
import StyledMenteePanel from "./MenteePanel.style";
import { auth, saveUserToFirestore } from "../../pages/api/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPopUp from "../../common/components/loginpopup/LoginPopUp.component";
import LoadingScreen from "../../common/components/loginpopup/loadingscreen/LoadingScreen.component";
import MenteeForm from "./menteeform/MenteeForm.component";

const MenteePanel: FC = () => {
    const [user, loading] = useAuthState(auth);
    
    const testUserInfo = {
        pomoc: "Gorące zmienne abstrakcyjne, gotowe, aby dzidziczyć!",
        objawy: "zadzwoń teraz!"
    }

    if (loading || user === null) {
        return (<>
            <LoginPopUp allowExit={false} />
            <LoadingScreen />
        </>)
    }

    else {
        return (
        <MainLayout mainContentBgColor={colorPallete.properties.mainContentBgColor}>
            <StyledMenteePanel>
                <MenteeForm />
                <button onClick={() => user ? saveUserToFirestore(user ,"menteeForms", testUserInfo) : window.alert("ERROR! User is not logged!")}>{user ? user.displayName : "zaloguj"}</button>
                <button>cookies</button>
            </StyledMenteePanel>
        </MainLayout>   
    ) 
    }
};

export default MenteePanel;