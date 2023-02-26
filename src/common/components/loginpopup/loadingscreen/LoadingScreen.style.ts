import styled from "styled-components";
import colorPallete from "../../../styles/colorpalette";

const StyledLoadingScreen = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center; 
    z-index: 999;
    bottom: 1em;
    left: 1em;
    
    & .loading_info {
        font-size: 1em;
        color: ${colorPallete.basic.white};
    }
`

export default StyledLoadingScreen;