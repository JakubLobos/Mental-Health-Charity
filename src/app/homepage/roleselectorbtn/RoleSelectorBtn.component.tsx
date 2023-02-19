import { FC } from "react";
import StyledRoleSelectorBtn from "./RoleSelectorBtn.style";

interface RoleSelectorBtnProps {
    value: string,
    router: string,
}

const RoleSelectorBtn: FC<RoleSelectorBtnProps> = ({value, router}) => {

    return (
        <StyledRoleSelectorBtn href={router}>
         {value}   
        </StyledRoleSelectorBtn>
    )
}

export default RoleSelectorBtn;