import {  useEffect, useState } from "react";
import LoginPopUp from "../components/loginpopup/LoginPopUp.component";
import { useUser } from "../utils/usersession/UserSessionProvider.component";

const withAuth = (Component:React.ReactNode | any) => {
    const Auth = (props:any) => {
        const { userSession } = useUser()
        const [showPopup, setShowPopup] = useState(false);
            
        useEffect(() => {
            if (userSession) {
                setShowPopup(false);
                console.log("usuwam popup")
            } else {
                setShowPopup(true);
                console.log("niezalogowany ")
            }
            console.log("auth protect")
            console.log(userSession)
        }, [userSession]);

        if (showPopup) return <LoginPopUp />;
        else return <Component {...props} />;
        
    };
    return Auth;
}

export default withAuth;