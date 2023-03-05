import { FC } from "react";
import StyledNotification from "./Notification.style";

interface NotificationProps {
    isVisible: boolean,
    content: string,
}

const Notification:FC<NotificationProps> = ({isVisible, content}) => {
    
    return (
        <StyledNotification isVisible={isVisible}>
            <p>Powiadomienie:</p>
            <p>
                {content}
            </p>
        </StyledNotification>
    )
}

export default Notification;