import styled from "styled-components";
import colorPallete from "../../../common/styles/colorpalette";

const StyledRoleSelectorBtn = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    padding: 1em;
    width: 14em;
    min-height: 5.4em;
    height: auto;
    background-color: ${colorPallete.basic.white};
    border: 1px solid ${colorPallete.basic.violet};
    font-size: 2em;
    color: ${colorPallete.basic.navy};
    transition: .3s;
    cursor: pointer;

    &:hover {
        box-shadow: inset 4px 4px 4px #1b1b1b7b;
    }
`

export default StyledRoleSelectorBtn;
