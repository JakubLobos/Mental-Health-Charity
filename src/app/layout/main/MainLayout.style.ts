import styled from "styled-components";
import layoutUtils from "./utils";

interface StyledMainLayoutProps {
    mainContentBgColor: string,
} 

const StyledMainLayout = styled.div<StyledMainLayoutProps>`
    flex-direction: column;
    min-height: 100vh;
    height: 100vh;

    & .content {
        /* padding-top: ${layoutUtils.navbarHeight}; */
        height: fit-content;
        min-height: 100%;
        background: ${props => props.mainContentBgColor};
    }
`

export default StyledMainLayout;