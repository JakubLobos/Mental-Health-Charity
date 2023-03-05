import styled from "styled-components";
import colorPallete from "../../styles/colorpalette";

interface StyledNotificationProps {
    isVisible: boolean,
}

const StyledNotification = styled.div<StyledNotificationProps>`
    position: absolute;
    display: ${props => props.isVisible ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    padding: .5em 1em .5em 1em;
    background-color: ${colorPallete.basic.pink};
    font-size: 1.5em;
    box-shadow: 4px 4px 4px #1b1b1b5b;
    right: 0;
    top: 35%;
    animation: showUpNotification .7s linear forwards;

    @keyframes showUpNotification {
        from {
            right: -100%;
        }

        to {
            right: 0;
        }
    }
`

export default StyledNotification;