import { FC } from "react"
import StyledNavbar from "./Navbar.style"
import Image from "next/image";
import logo from "../../../../assets/images/static/logo.png"
import { useUser } from "../../../../common/utils/usersession/UserSessionProvider.component";

const Navbar: FC = () => {

    const { userSession } = useUser();

    return (
        <StyledNavbar>
            <div className="navbar_logo_wrapper">
                <Image className="logo_img" height={33} alt="Logo Askle" src={logo}></Image>
                <h2>Stowarzyszenie X</h2>
            </div>
            <ul>
                <li><a href="/">Strona główna</a></li>
                <li><a href="#">O nas</a></li>
                <li><a href="/panel-podopiecznego">Panel podopiecznego</a></li>
                <li>{
                    userSession ? <a><img src={userSession.photoURL} alt={userSession.displayName} height={40} />{userSession.displayName}</a> : <a>Zaloguj</a>
                }</li>
            </ul>
        </StyledNavbar>
    )
}

export default Navbar;