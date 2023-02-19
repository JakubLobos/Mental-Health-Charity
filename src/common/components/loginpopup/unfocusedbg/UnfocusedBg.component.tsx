import { FC } from "react"
import StyledUnfocusedBg from "./UnfocusedBg.style";

interface UnfocusedBgProps {
    children: React.ReactNode, 
}

const UnfocusedBg: FC<UnfocusedBgProps> = ({children}) => {

    return (
        <StyledUnfocusedBg>
            {children}
        </StyledUnfocusedBg>
    )
};

export default UnfocusedBg;