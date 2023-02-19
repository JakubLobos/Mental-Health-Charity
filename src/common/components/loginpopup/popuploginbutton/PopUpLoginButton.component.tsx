import { FC } from "react"
import Image, { StaticImageData } from "next/image";
import StyledLoginPopUpButton from "./PopUpLoginButton.style";

interface LoginPopUpButtonProps {
    value: string,
    imgsrc: StaticImageData,
    service: any,
}

const LoginPopUpButton: FC<LoginPopUpButtonProps> = ({value, imgsrc, service}) => {
    return (
        <StyledLoginPopUpButton onClick={() => service()}>
            <Image className="login_button_img" height={40} alt={value} src={imgsrc}></Image>
            {value}
        </StyledLoginPopUpButton>
    )
};

export default LoginPopUpButton;