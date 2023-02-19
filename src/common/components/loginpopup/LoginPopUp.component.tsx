import { FC, useEffect } from "react";
import StyledLoginPopUp from "./LoginPopUp.style";
import LoginPopUpButton from "./popuploginbutton/PopUpLoginButton.component";
import UnfocusedBg from "./unfocusedbg/UnfocusedBg.component";
import FacebookIcon from "../../../assets/images/static/facebook_icon.png"
import GoogleIcon from "../../../assets/images/static/google_icon.svg"
import { auth } from "../../../pages/api/firebase/firebase";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import { useUser } from "../../utils/usersession/UserSessionProvider.component";
import Image from "next/image";

const LoginPopUp:FC = () => {
    
    const [user, setUser] = useAuthState(auth)
    const googleAuth = new GoogleAuthProvider();
    const facebookAuth = new FacebookAuthProvider();
    const { setUserSession, userSession } = useUser();
    
    const loginWithGoogle = async() => {
        const result = await signInWithPopup(auth, googleAuth);
    }

    const loginWithFacebook = async() => {
        const result = await signInWithPopup(auth, facebookAuth);
    }




    const checkUserSession = () => {
        if (userSession) {
            return (<>
                <h2>Zalogowano jako {userSession.displayName}</h2>
                <img width={60} alt={userSession.displayName} src={userSession.photoURL} />
                <button onClick={() => {
                    auth.signOut();
                    setUserSession(null);
                }}>Wyloguj</button> </>
            )
        }

        else {
            return (<>
                <LoginPopUpButton value="Google" imgsrc={GoogleIcon} service={loginWithGoogle}/>
                <LoginPopUpButton value="Facebook" imgsrc={FacebookIcon} service={loginWithFacebook} /></>
            )
        }
    }

    useEffect(() => {
        console.log("user")
        console.log(user)
        user ? setUserSession(user) : console.log("user undefined")
        console.log("user session:")
        console.log(userSession);
    },[setUserSession, user])

    return (
        <UnfocusedBg>
            <StyledLoginPopUp>
                {
                    checkUserSession()
                }
            </StyledLoginPopUp>
        </UnfocusedBg>
        )
}

export default LoginPopUp;