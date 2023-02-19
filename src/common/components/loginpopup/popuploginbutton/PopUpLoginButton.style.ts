import styled from "styled-components";
import colorPallete from "../../../styles/colorpalette";

const StyledLoginPopUpButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: .5em 1em .5em 1em;
    min-width: 8em;
    background-color: ${colorPallete.basic.navy};
    font-size: 2em;
    width: fit-content;
    height: fit-content;
    border: none;
    color: ${colorPallete.basic.white};
    opacity: .9;
    transition: .3s;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`

export default StyledLoginPopUpButton;