import { FC } from "react"
import StyledUnfocusedBg from "./UnfocusedBg.style";

interface UnfocusedBgProps {
    children: React.ReactNode, 
    isPopUpVisible: boolean,
}

const UnfocusedBg: FC<UnfocusedBgProps> = ({children, isPopUpVisible}) => {

    return (
        <StyledUnfocusedBg isPopUpVisible={isPopUpVisible}>
            {children}
        </StyledUnfocusedBg>
    )
};

export default UnfocusedBg;