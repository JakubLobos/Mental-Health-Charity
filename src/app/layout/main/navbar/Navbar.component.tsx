import { FC } from "react"
import StyledNavbar from "./Navbar.style"
import Image from "next/image";
import logo from "../../../../assets/images/static/logo.png"
import Link from "next/link";
import { auth } from "../../../../pages/api/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar: FC = () => {

    const [user, loading, error] = useAuthState(auth)

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
                <li>
                    {user != null ? (
                        <Link className="account_info_wrapper" href="">
                        {user.photoURL != null && (
                            <Image
                                className="user_db_profile_img"
                                src={user.photoURL}
                                alt={user.displayName ?? ''}
                                height={40}
                                width={40}
                            />
                        )}
                        {user.displayName}
                        </Link>
                    ) : (
                        <Link href="">Zaloguj</Link>
                    )}
                </li>
            </ul>
        </StyledNavbar>
    )
}

export default Navbar;