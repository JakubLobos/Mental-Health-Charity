import { FC } from "react";
import StyledRoleSelectorBtn from "./RoleSelectorBtn.style";

interface RoleSelectorBtnProps {
    value: string,
}

const RoleSelectorBtn: FC<RoleSelectorBtnProps> = ({value}) => {

    return (
        <StyledRoleSelectorBtn>
         {value}   
        </StyledRoleSelectorBtn>
    )
}

export default RoleSelectorBtn;