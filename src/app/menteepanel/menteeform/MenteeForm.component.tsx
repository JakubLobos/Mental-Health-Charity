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
                    <input type="text" name="namesurname" contentEditable={false} value={user?.displayName + ""} />
                    <label htmlFor="namesurname">Imie</label>
                </p>
                <p>
                    <input type="text" name="surname" contentEditable={false} value={user?.displayName + ""} />
                    <label htmlFor="surname">Nazwisko</label>
                </p>
                <p>
                    <input type="text" name="email" contentEditable={false} value={user?.email + ""} />
                    <label htmlFor="email">e-mail</label>
                </p>
                <p>
                    <input type="number" name="wiek" contentEditable={false} placeholder={"25"} />
                    <label htmlFor="wiek">Wiek</label>
                </p>
                <p>
                    <textarea name="details" placeholder={"Potrzebuje pomocy w (..); Od jakiegoś czasu czuję, że (..)."} />
                    <label htmlFor="details">Powiedz nam cos o sobie!</label>
                </p>
                <p>
                    <input type="submit" onClick={() => console.log("submited")} />
                </p>
            </fieldset>
        </StyledMenteeForm>
    )
}

export default MenteeForm;