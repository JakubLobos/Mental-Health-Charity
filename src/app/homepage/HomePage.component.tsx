import { FC, useEffect, useState } from "react"
import colorPallete from "../../common/styles/colorpalette";
import MainLayout from "../layout/main/MainLayout.component";
import StyledHomePage from "./HomePage.style";
import RoleSelectorBtn from "./roleselectorbtn/RoleSelectorBtn.component";
import DotsWave from "../../assets/images/static/dotswave.svg"
import Image from "next/image";
import LoginPopUp from "../../common/components/loginpopup/LoginPopUp.component";

const HomePage: FC = () => {
    
    const [role, setRole] = useState("");

    const getRoleDesc = (role:string) => {
        switch (role) {
            case "Wolontariuszem":
                return "Jestem skłonny udzielać bezpłatnego wsparcia psychologicznego, oraz chętnie podejmę współpracę z przeszkolonym zespołem."
        
            case "Podopiecznym":
                return "Chce otrzymać bezpłatną pomoc psychologiczną, porozmawiać o moich problemach."
            
            default:
                return "W czym możemy pomóc?"
        }
    }

    return (
        <MainLayout mainContentBgColor={colorPallete.properties.mainContentBgColor}>
            <StyledHomePage>
                <LoginPopUp allowExit={true} />
                <div className="homepage_wrapper">
                    <p className="homepage_desc_im">Jestem { role ? role.toLowerCase() : "..."}</p>
                    <p className="homepage_desc_im_more">{getRoleDesc(role)}</p>
                    <div className="buttons_wrapper">
                        <RoleSelectorBtn setRole={setRole} value={"Wolontariuszem"} router={"/panel-wolontariusza"} />
                        <RoleSelectorBtn setRole={setRole} value={"Podopiecznym"} router={"/panel-podopiecznego"} />
                        <Image className="dots_wave" alt="Logo" src={DotsWave}></Image>
                    </div>
                </div>
            </StyledHomePage>
        </MainLayout>
    )
}

export default HomePage;