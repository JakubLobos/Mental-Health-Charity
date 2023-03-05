import styled from "styled-components";
import colorPallete from "../../../common/styles/colorpalette";

const StyledMenteeForm = styled.form`
    display: flex;
    padding: 1em;
    align-items: center;
    justify-content: center;
    width: 100%;
    
    & label {
        font-size: 2em;
        color: ${colorPallete.basic.navy};
        opacity: .8;
    }

    & .form_row_align {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        width: 100%;
    }

    & .form_desc {
        color: ${colorPallete.basic.navy};
        font-size: 1em;
    }

    & textarea {
        height: 10vh;
        font-size: 1.5em;
    }

    & fieldset {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
        background-color: ${colorPallete.basic.white};
        border: none;
        padding: 1em 0 1em 0;
    }

    & legend {
        font-size: 2em;
        text-align: center;
        font-family: "Ubuntu";
        padding: 1em;
        color: ${colorPallete.basic.white};
        background-color: ${colorPallete.basic.pink};
        width: 100%;
        box-shadow: 0px 4px 4px #1b1b1b5b;
    }

    & input {
        font-size: 1.5em;
        background-color: ${colorPallete.basic.white};
        border: none;
        color: ${colorPallete.basic.navy};
        border-bottom: 2px solid ${colorPallete.basic.pink};
    }

    & input:focus {
        outline: 2px solid ${colorPallete.basic.pink};
    }

    & p {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 80%;
        margin: .5em;
    }

    & .form_submit_btn {
        color: ${colorPallete.basic.white};
        background-color: ${colorPallete.basic.pink};
        padding: .4em;
        font-size: 2em;
        border: 4px solid ${colorPallete.basic.pink};
        cursor: pointer;
        transition: .2s;
    }

    & .form_submit_btn:hover {
        color: ${colorPallete.basic.pink};
        background-color: ${colorPallete.basic.white};
        border: 4px solid ${colorPallete.basic.pink};
    }
`

export default StyledMenteeForm;