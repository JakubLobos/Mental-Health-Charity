import { FC } from "react"
import GlobalStyle from "../../../common/styles/Global.style";

interface MainLayoutProps {
    children: FC;
}

const MainLayout: FC<MainLayoutProps> = () => {
    
    return (
        <GlobalStyle />
    )
};

export default MainLayout;