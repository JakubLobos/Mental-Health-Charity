import { FC } from "react"
import colorPallete from "../../common/styles/colorpalette";
import MainLayout from "../layout/main/MainLayout.component";
import StyledHomePage from "./HomePage.style";
import RoleSelectorBtn from "./roleselectorbtn/RoleSelectorBtn.component";
import DotsWave from "../../assets/images/static/dotswave.svg"
import Image from "next/image";
import LoginPopUp from "../../common/components/loginpopup/LoginPopUp.component";

const HomePage: FC = () => {
    
    return (
        <MainLayout mainContentBgColor={colorPallete.properties.mainContentBgColor}>
            <StyledHomePage>
                <div className="homepage_wrapper">
                    <p className="homepage_desc_im">Jestem...</p>
                    <div className="buttons_wrapper">
                        <RoleSelectorBtn value={"Wolontariuszem"} router={"/panel-wolontariusza"} />
                        <RoleSelectorBtn value={"Podopiecznym"} router={"/panel-podopiecznego"} />
                        <Image className="dots_wave" alt="Logo" src={DotsWave}></Image>
                    </div>
                </div>
            </StyledHomePage>
        </MainLayout>
    )
}

export default HomePage;