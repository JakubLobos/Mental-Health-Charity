import styled from "styled-components";

interface StyledUnfocusedBgProps {
    isPopUpVisible: boolean,
}

const StyledUnfocusedBg = styled.div<StyledUnfocusedBgProps>`
    display: ${props => props.isPopUpVisible ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(7px) brightness(70%);
    z-index: 999;
    animation: showPopUp 1s linear forwards;

    @keyframes showPopUp {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

export default StyledUnfocusedBg;