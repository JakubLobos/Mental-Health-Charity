import { collection, doc, DocumentData, getDoc, getDocs, query } from "firebase/firestore";
import { FC, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPopUp from "../../common/components/loginpopup/LoginPopUp.component";
import Notification from "../../common/components/notification/Notification.component";
import colorPallete from "../../common/styles/colorpalette";
import { auth, db } from "../../pages/api/firebase/firebase";
import MainLayout from "../layout/main/MainLayout.component";
import StyledAdminPanel from "./AdminPanel.style";

const AdminPanel: FC = () => {

    const [user] = useAuthState(auth)
    const [adminStatus, setAdminStatus] = useState<DocumentData>();

    useEffect(() => {
        if(user) {
            const getAdmins = async () => {
                const querySnapshot = await getDoc(doc(db, "admins", user.uid))
                setAdminStatus(querySnapshot.data())
            };
            getAdmins();
        }
    });

    if (!adminStatus) {
        return (
            <MainLayout mainContentBgColor={colorPallete.properties.mainContentBgColor}>
                <LoginPopUp allowExit={true} />
                <Notification isVisible={true} content={"Ta podstrona wymaga uprawnień administratora. Jeśli uważasz, że powinieneś takie posiadać zgłoś się do odpowiedniego działu."} />
                <button onClick={() => console.log(adminStatus)}>dwadawd</button>
            </MainLayout>
        )
    } else {
        return (
            <StyledAdminPanel>
                <h1>PANEL ADMINISTRATORA / KOORDYNATORA</h1>
                <form>
                    <legend>Dodaj wolontariusza</legend>
                    <label htmlFor={"user_uid"}>Podaj UID użytkownika</label>
                    <input id={"user_uid"} type={"text"} placeholder={"UID UŻYTKOWNIKA"} />
                    <label htmlFor={"username"}>Ta nazwa będzie widoczna w rozmowach na chacie</label>
                    <input id={"username"} type={"text"} placeholder={"Imie użytkownika"} />
                    <input type={"submit"} value={"Dodaj"}/>
                </form>
                <div>
                    <h2>Lista dodanych wolontariuszy</h2>
                    <ul>
                        <li>demo</li>
                    </ul>
                </div>
                <div>
                    <h2>Lista formularzy wypełnionych przez podopiecznych</h2>
                    <ul>
                        <li>demo</li>
                    </ul>
                </div>
                <form>
                    <legend>Sparuj wolontariusza z podopiecznym</legend>
                    <p>
                        <label htmlFor={"user_uid"}>Podaj UID użytkownika</label>
                        <input id={"user_uid"} type={"text"} placeholder={"UID UŻYTKOWNIKA"} />
                    </p>
                    <p>
                        <label htmlFor={"user_uid"}>Podaj imie użytkownika</label>
                        <input id={"user_uid"} type={"text"} placeholder={"UID UŻYTKOWNIKA"} />
                    </p>
                    <p>
                        <label htmlFor={"user_uid"}>Podaj UID wolontariusza</label>
                        <input id={"user_uid"} type={"text"} placeholder={"UID WOLONTARIUSZA"} />
                    </p>
                    <p>
                        <label htmlFor={"user_uid"}>Podaj imie wolontariusza</label>
                        <input id={"user_uid"} type={"text"} placeholder={"UID WOLONTARIUSZA"} />
                    </p>
                        <input type={"submit"} value={"Dodaj"} />
                </form>
                <div>
                    <h2>Lista sparowanych czatów</h2>
                    <ul>
                        <li>
                            demo: null
                        </li>
                    </ul>
                </div>
                <div>
                    <p>DEBUG | PRODUCTION ONLY</p>
                    <button onClick={() => console.log(adminStatus)}>REACHED ADMIN DOC</button>
                    <button onClick={() => console.log(user)}>USER</button>
                    <button onClick={() => console.log(adminStatus.uid === user?.uid)}>123</button>
                </div>
            </StyledAdminPanel>
        )
    } 
}

export default AdminPanel;
