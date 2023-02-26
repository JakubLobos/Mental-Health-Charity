import {  useEffect, useState } from "react";
import LoginPopUp from "../components/loginpopup/LoginPopUp.component";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../pages/api/firebase/firebase";

const withAuth = (Component: React.ReactNode | any) => {
    const [user, loading, error] = useAuthState(auth)
    const Auth = (props:any) => {
        const showPopup = user ? true : false;
        return showPopup ? <LoginPopUp allowExit={false} /> : <Component {...props} />;
    };
    return Auth;
}

export default withAuth;