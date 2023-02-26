import { FC } from "react";
import colorPallete from "../../common/styles/colorpalette";
import MainLayout from "../layout/main/MainLayout.component";
import StyledMenteePanel from "./MenteePanel.style";
import { auth } from "../../pages/api/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPopUp from "../../common/components/loginpopup/LoginPopUp.component";
import LoadingScreen from "../../common/components/loginpopup/loadingscreen/LoadingScreen.component";

const MenteePanel: FC = () => {
    const [user, loading, error] = useAuthState(auth);
    
    if(loading || user === null) {
        return (<>
            <LoginPopUp allowExit={false} />
            <LoadingScreen />
            
        </>)
    }
    else {
        return (
        <MainLayout mainContentBgColor={colorPallete.properties.mainContentBgColor}>
            <StyledMenteePanel>
                <p>Uzyskano autoryzację do panelu</p>
                <p>treść strony...</p>
                <button onClick={() => {console.log(user ? user : "eee")}}>{user ? user.displayName : "zaloguj"}</button>
                <button>cookies</button>
            </StyledMenteePanel>
        </MainLayout>   
    ) 
    }
};

export default MenteePanel;