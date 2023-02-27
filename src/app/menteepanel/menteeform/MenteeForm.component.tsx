import { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../pages/api/firebase/firebase";
import StyledMenteeForm from "./MenteeForm.style";

const MenteeForm:FC = () => {

    const [user] = useAuthState(auth)

    return (
        <StyledMenteeForm>
            <fieldset>
                <legend>Ankieta podopiecznego</legend>
                <p>Wypełnienie jej jest dobrowolne! Pamiętaj, że wypełniając ją, dajesz nam więcej wskazówek jak pomóc Tobie!</p>
                <p>
                    <input type="text" name="name" id="size_1" value={user?.displayName + ""} />
                    <label htmlFor="name">Imie</label>
                </p>
                <p>
                    <input type="text" name="surname" id="size_2" value={user?.displayName + ""} />
                    <label htmlFor="surname">Nazwisko</label>
                </p>
                <p>
                    <input type="text" name="age" id="size_3" value={user?.email + ""} />
                    <label htmlFor="age">Wiek</label>
                </p>
            </fieldset>
        </StyledMenteeForm>
    )
}

export default MenteeForm;