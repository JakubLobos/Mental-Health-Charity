import { FC, useEffect, useState } from "react";
import StyledLoginPopUp from "./LoginPopUp.style";
import LoginPopUpButton from "./popuploginbutton/PopUpLoginButton.component";
import UnfocusedBg from "./unfocusedbg/UnfocusedBg.component";
import FacebookIcon from "../../../assets/images/static/facebook_icon.png"
import GoogleIcon from "../../../assets/images/static/google_icon.svg"
import { auth, saveToFirestore } from "../../../pages/api/firebase/firebase";
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"
import Image from "next/image";
import 'firebase/auth';
import 'firebase/firestore';

interface LoginPopUpProps {
    allowExit: boolean;
}

const LoginPopUp:FC<LoginPopUpProps> = ({allowExit}) => {
    const [user] = useAuthState(auth)
    const googleAuth = new GoogleAuthProvider();
    const facebookAuth = new FacebookAuthProvider();
    const [isPopUpVisible, setIsPopUpVisible] = useState(true)
    
    const loginWithGoogle = async () => {
        const result = await signInWithPopup(auth, googleAuth);

    }

    const loginWithFacebook = async() => {
        const result = await signInWithPopup(auth, facebookAuth);
    }

    useEffect(() => {
        if(user) {
            saveToFirestore(user, "usersData", {})
        }
    },[user])

    const checkUserSession = () => {
        if (user) {
            return (<>
                <h2>Zalogowano jako {user.displayName}</h2>
                <h3>e-mail: {user.email}</h3>
                <h3>uprawnienia: użytkownik</h3>
                <Image width={60} height={60} alt={"user image profile"} src={user.photoURL ? user.photoURL : ""} />
                <button onClick={() => {
                    auth.signOut();
                }}>Wyloguj</button> </>
            )
        } else {
            return (<>
                <LoginPopUpButton value="Google" imgsrc={GoogleIcon} service={loginWithGoogle}/>
                <LoginPopUpButton value="Facebook" imgsrc={FacebookIcon} service={loginWithFacebook} /></>
            )
        }
    }

    return (
        <UnfocusedBg isPopUpVisible={isPopUpVisible}>
            <StyledLoginPopUp allowExit={allowExit}>
                <button onClick={() => setIsPopUpVisible(isPopUpVisible ? false : true)} className="exit_popup">X</button>
                {
                    checkUserSession()
                }
            </StyledLoginPopUp>
        </UnfocusedBg>
        )
}

export default LoginPopUp;