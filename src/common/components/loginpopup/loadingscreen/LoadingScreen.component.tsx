import { FC } from "react"
import MainLayout from "../../../../app/layout/main/MainLayout.component";
import colorPallete from "../../../styles/colorpalette";
import Image from "next/image";
import LoadingIcon from "../../../../assets/images/animated/loading-animated.svg"
import StyledLoadingScreen from "./LoadingScreen.style";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../pages/api/firebase/firebase";

const LoadingScreen: FC = () => {  
    const [error] = useAuthState(auth)
    return (
        <MainLayout mainContentBgColor={colorPallete.properties.mainContentBgColor}>
            <StyledLoadingScreen>
                <Image alt={"Loading icon"} src={LoadingIcon} height={90} width={90} />
                <h2 className="loading_info">Strona którą próbujesz wyświetlić wymaga zalogowania, lub wystąpił błąd w autoryzacji. {error ? "Kod błędu " + error : "Brak kodu błędu do wyświetlenia!"}</h2>
            </StyledLoadingScreen>
        </MainLayout>
    )
}

export default LoadingScreen;