import styled from "styled-components";
import colorPallete from "../../../../common/styles/colorpalette";
import layoutUtils from "../utils";

const StyledNavbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2em;
    background-color: ${colorPallete.basic.white};
    position: fixed;
    height: ${layoutUtils.navbarHeight};
    width: 100%;
    border-radius: 0 0 1em 1em;
    box-shadow: .1em .2em .1em #1b1b1b5b;
    z-index: 999; //force

    & .navbar_logo_wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & ul {
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }


    & li {
        list-style: none;
        padding: .6em;
        border-radius: 20px;
        opacity: .8;
        transition: .5s;

        &:hover {
            opacity: 1;
        }
        & a {
            color: ${colorPallete.basic.navy};
            text-decoration: none;
            font-size: 1.21em;
        }
    }
    
    & .logo_img { margin-right: .5em; height: 2em;}

    & .account_info_wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${colorPallete.basic.black};
        font-size: 1.2em;
        font-weight: 1000;
        background-color: ${colorPallete.basic.violet};
        padding: .2em .5em .2em .2em;
        border-radius: .2em;

        & .user_db_profile_img {
            margin-right: .5em;
        }
    }
`

export default StyledNavbar;