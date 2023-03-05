import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Notification from "../../../common/components/notification/Notification.component";
import { auth, saveToFirestore } from "../../../pages/api/firebase/firebase";
import StyledMenteeForm from "./MenteeForm.style";

const MenteeForm:FC = () => {


    const [isPopUpVisible, setIsPopUpVisible] = useState(false);
    const [ user ] = useAuthState(auth)
    const [formData, setFormData] = useState({
        imie_i_nazwisko: user?.displayName,
        email: user?.email,
        wiek: "",
        informacje: "",
        testowy: "",
    });

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formData)
        user ? saveToFirestore(user, "menteeForms", formData).then(() => {
            showPopUp()
        }) : window.alert("Użytkownik nie jest zalogowany!")
    }

    const handleInputChange = (event:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value
        }));
    };
    
    const showPopUp = () => {
        setIsPopUpVisible(true);
        setTimeout(() => setIsPopUpVisible(false), 3000);
    }

    return (
        <StyledMenteeForm>
            <Notification isVisible={isPopUpVisible} content={"Wysłano pomyślnie"} />
            <fieldset>
                <legend>Ankieta podopiecznego</legend>
                <p className="form_desc">*Wypełnienie jej jest dobrowolne! Pamiętaj, że wypełniając ją, dajesz nam więcej wskazówek jak pomóc Tobie!</p>
                <p>
                    <label htmlFor="name">Imie</label>
                    <input id="name" type="text" name="imie_i_nazwisko" value={user?.displayName + ""} />
                </p>
                <p>
                    <label htmlFor="email">e-mail</label>
                    <input id="email" type="email" name="email" value={user?.email + ""} />
                </p>
                <p>
                    <label htmlFor="age">Wiek</label>
                    <input onChange={handleInputChange} id="age" min={8} max={110} type="number" name="wiek" contentEditable={false} placeholder={"25"} />
                </p>
                <p>
                    <label htmlFor="testowy">testowy</label>
                    <input onChange={handleInputChange} id="testowy" min={8} max={110} type="number" name="testowy" contentEditable={false} placeholder={"25"} />
                </p>
                <p>
                    <label htmlFor="more_about">Powiedz nam cos o sobie!</label>
                    <input onChange={handleInputChange} id="more_about" name="informacje" placeholder={"Potrzebuje pomocy w (..); Od jakiegoś czasu czuję, że (..)."} />
                </p>
                <p>
                    <input onClick={(e) => handleSubmit(e)} className="form_submit_btn" type="submit" value={"Wyślij"} />
                </p>
                <p className="form_desc">*Klikając przycisk "Wyślij" zgadzam się na przetwarzanie moich danych osobowych i zapisywanie ich w serwisie Firebase!</p>
            </fieldset>
        </StyledMenteeForm>
    )
}

export default MenteeForm;