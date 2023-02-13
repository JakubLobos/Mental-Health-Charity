import { FC } from "react"
import StyledNavbar from "./Navbar.style"
import Image from "next/image";
import logo from "../../../../assets/images/static/logo.png"

const Navbar: FC = () => {

    return (
        <StyledNavbar>
            <div className="navbar_logo_wrapper">
                <Image className="logo_img" height={33} alt="Logo Askle" src={logo}></Image>
                <h2>Stowarzyszenie X</h2>
            </div>
            <ul>
                <li><a href="#">Strona główna</a></li>
                <li><a href="#">O nas</a></li>
                <li><a href="#">Panel podopiecznego</a></li>
                <li><a href="#">Zaloguj</a></li>
            </ul>
        </StyledNavbar>
    )
}

export default Navbar;