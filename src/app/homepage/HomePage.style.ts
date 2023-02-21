import styled from "styled-components";
import colorPallete from "../../common/styles/colorpalette";
import layoutUtils from "../layout/main/utils";

const StyledHomePage = styled.section`
    padding-top: ${layoutUtils.navbarHeight};
    width: 100%;
    min-height: 100vh;
    height: 100vh;
    

    & p {
        font-size: 6em;
        color: ${colorPallete.basic.white};
    }

    .homepage_desc_im_more {
        font-size: 1em;
        background-color: ${colorPallete.basic.pink};
        padding: .4em;
        border-radius: 1em;
        animation: descGlowing 4s infinite;
    }

    & .homepage_wrapper {
        display: flex;
        position: relative; 
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        z-index: 1;
        overflow: hidden;
    }

    & .dots_wave {
        position: absolute;
        width: 50em;
        top: 0;
        left: 0;
        z-index: -1;
    }

    & .buttons_wrapper {
        display: flex;
        width: 80%;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 5em;
    }

    @keyframes descGlowing {
        0%,100% {
            opacity: .7;
        }

        50% {
            opacity: 1;
        }
    }

`

export default StyledHomePage;