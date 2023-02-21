import { Dispatch, FC, SetStateAction } from "react";
import StyledRoleSelectorBtn from "./RoleSelectorBtn.style";

interface RoleSelectorBtnProps {
    value: string,
    router: string,
    setRole: Dispatch<SetStateAction<string>>,
}

const RoleSelectorBtn: FC<RoleSelectorBtnProps> = ({value, router, setRole}) => {

    return (
        <StyledRoleSelectorBtn onMouseOver={() => setRole(value)} onMouseOutCapture={() => setRole("")} href={router}>
         {value}   
        </StyledRoleSelectorBtn>
    )
}

export default RoleSelectorBtn;