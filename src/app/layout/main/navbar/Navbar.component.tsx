import { FC } from "react"
import StyledNavbar from "./Navbar.style"
import Image from "next/image";
import logo from "../../../../assets/images/static/logo.png"
import { useUser } from "../../../../common/utils/usersession/UserSessionProvider.component";
import Link from "next/link";

const Navbar: FC = () => {

    const { userSession } = useUser();

    return (
        <StyledNavbar>
            <div className="navbar_logo_wrapper">
                <Image className="logo_img" height={33} alt="Logo Askle" src={logo}></Image>
                <h2>Stowarzyszenie X</h2>
            </div>
            <ul>
                <li><Link href={"/"} >Strona główna</Link></li>
                <li><Link href={"/"} >O nas</Link></li>
                <li><Link href={"/panel-podopiecznego"}>Panel podopiecznego</Link></li>
                <li>{
                    userSession ?
                        <Link className="account_info_wrapper" href={""} >
                            <Image className="user_db_profile_img" src={userSession.photoURL} alt={userSession.displayName} height={40} width={40} />
                            {userSession.displayName}
                        </Link> : <Link href={""} >Zaloguj</Link>
                }</li>
            </ul>
        </StyledNavbar>
    )
}

export default Navbar;