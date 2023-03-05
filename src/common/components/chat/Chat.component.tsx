import { FC } from "react";
import StyledChat from "./Chat.style";
import "firebase/firestore"
import firebase from "firebase/app"
import "firebase/auth"
import { db } from "../../../pages/api/firebase/firebase";

const Chat:FC = () => {

    return (
        <StyledChat>
            <legend>Chat</legend>
            {/* chat contact selector */}
            <ul>
                <li>
                    <input type="radio" id="huey" name="drone" value="huey" />
                    <label htmlFor="huey">Huey</label>
                </li>
                <li>
                    <input type="radio" id="dewey" name="drone" value="dewey"/>
                    <label htmlFor="dewey">Dewey</label>
                </li>
                <li>
                    <input type="radio" id="louie" name="drone" value="louie"/>
                    <label htmlFor="louie">Louie</label>
                </li>
            </ul>
            {/* chat output */}
            <div> 
                <output>
                    <h3>Jan:</h3>
                    <p>Siemanko!</p>
                </output>
            </div>
            {/* chat controls */}
            <input type={"text"} placeholder={"wiadomość..."} />
            <input type={"submit"} value={"wyślij"}/>
        </StyledChat>
    )
}

export default Chat;
