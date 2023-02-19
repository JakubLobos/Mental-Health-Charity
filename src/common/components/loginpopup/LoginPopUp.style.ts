import styled from "styled-components";
import colorPallete from "../../styles/colorpalette";

const StyledLoginPopUp = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    padding: 7em 2em 2em 2em;
    min-height: 23em; 
    background-color: ${colorPallete.basic.white};

    &::before {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2em;
        content: 'Zaloguj';
        font-family: Ubuntu;
        color: ${colorPallete.basic.white};
        text-shadow: 3px 3px 3px #1b1b1b4b;
        text-align: center;
        background: ${colorPallete.properties.mainContentBgColor};
        position: absolute;
        width: 100%;
        height: 3em;
        top: 0;
        left: 0;
    }
`

export default StyledLoginPopUp;