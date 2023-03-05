import { FC } from "react";
import colorPallete from "../../common/styles/colorpalette";
import MainLayout from "../layout/main/MainLayout.component";
import StyledMenteePanel from "./MenteePanel.style";
import { auth, saveToFirestore } from "../../pages/api/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPopUp from "../../common/components/loginpopup/LoginPopUp.component";
import LoadingScreen from "../../common/components/loginpopup/loadingscreen/LoadingScreen.component";
import MenteeForm from "./menteeform/MenteeForm.component";
import Chat from "../../common/components/chat/Chat.component";

const MenteePanel: FC = () => {
    const [user, loading] = useAuthState(auth);

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
                    <Chat />
                    <p>dev alpha</p>
                <button onClick={() => console.log(user)}>debug cookies</button>
            </StyledMenteePanel>
        </MainLayout>   
    ) 
    }
};

export default MenteePanel;