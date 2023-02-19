import { FC } from "react";
import withAuth from "../../common/HOC/AuthProtection.component";
import colorPallete from "../../common/styles/colorpalette";
import MainLayout from "../layout/main/MainLayout.component";
import StyledMenteePanel from "./MenteePanel.style";

const MenteePanel: FC = withAuth(() => {
    return (
        <StyledMenteePanel>
            <p>Witam w panelu</p>
        </StyledMenteePanel>   
    ) 
});

const ProtectedMenteePanel = () => {
    return (
        <MainLayout mainContentBgColor={colorPallete.properties.mainContentBgColor}>
            <MenteePanel />
        </MainLayout>
    )
}

export default ProtectedMenteePanel;