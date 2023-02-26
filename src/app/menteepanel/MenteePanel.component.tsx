import { FC } from "react";
import withAuth from "../../common/HOC/AuthProtection.component";
import colorPallete from "../../common/styles/colorpalette";
import { useUser } from "../../common/utils/usersession/UserSessionProvider.component";
import MainLayout from "../layout/main/MainLayout.component";
import StyledMenteePanel from "./MenteePanel.style";
import { auth } from "../../pages/api/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const MenteePanel: FC = withAuth(() => {
    
    return (
        <StyledMenteePanel>
            <p>Uzyskano autoryzację do panelu</p>
            <p>treść strony...</p>
            <button onClick={() => {window.alert(userSession.displayName)}}>provider</button>
            <button>cookies</button>
        </StyledMenteePanel>   
    ) 
});

const ProtectedMenteePanel = () => {
    return (
        <MainLayout mainContentBgColor={colorPallete.properties.mainContentBgColor}>
            <MenteePanel />
        </MainLayout>
    )
}

export default ProtectedMenteePanel;