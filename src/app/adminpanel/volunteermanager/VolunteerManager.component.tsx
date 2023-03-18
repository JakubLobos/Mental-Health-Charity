import { doc, setDoc } from "firebase/firestore";
import { FC, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Notification from "../../../common/components/notification/Notification.component";
import { auth, db } from "../../../pages/api/firebase/firebase";
import StyledVolunteerManager from "./VolunteerManager.style";

const VolunteerManager:FC = () => {

    const [user] = useAuthState(auth)
    const [uid, setUid] = useState<string | null>(null); 
    const [name, setName] = useState<string | null>(null);
    const [alertContent, setAlertContent] = useState<string>("ERROR! Jeśli widzisz ten komunikat skontakuj się z odpowiednim działem.")
    const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false)

    const showPopUp = () => {
        setIsPopUpVisible(true);
        setTimeout(() => setIsPopUpVisible(false), 3000);
    }

    const registerNewVolunteer = async (e:React.MouseEvent<Element, MouseEvent>) => {
        e.preventDefault();
        if (uid && name) {
            try {
                await setDoc(doc(db, "chats", uid), { name: name, }, { merge: true });
                console.log("Document successfully written!");
                setAlertContent("Wolontariusz o UID " + uid + ", oraz imieniu " + name + " | DODANY POMYŚLNIE")
            } catch (error) {
                setAlertContent("Błąd przy wprowadzaniu nowego wolontariusza: " + error + " | Skontaktuj się z odpowiednim działem!")
                console.error("Error writing document: " + error);
            };
            showPopUp()
        } else {
            setAlertContent("Błąd przy wprowadzaniu nowego wolontariusza! Podane UID lub imię nie jest prawidłowe.")
            showPopUp()
        };
    };

    return (
        <StyledVolunteerManager>
            <Notification isVisible={isPopUpVisible} content={alertContent} />
            <form>
                    <legend>Dodaj wolontariusza</legend>
                    <label htmlFor={"user_uid"}>Podaj UID użytkownika</label>
                    <input onChange={(e) => setUid(e.target.value)} id={"user_uid"} type={"text"} placeholder={"UID UŻYTKOWNIKA"} />
                    <label htmlFor={"username"}>Ta nazwa będzie widoczna w rozmowach na chacie</label>
                    <input onChange={(e) => setName(e.target.value)} id={"username"} type={"text"} placeholder={"Imie użytkownika"} />
                    <input onClick={(e) => registerNewVolunteer(e)} type={"submit"} value={"Dodaj"}/>
                </form>
        </StyledVolunteerManager>
    )
}

export default VolunteerManager;