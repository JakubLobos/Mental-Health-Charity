import { collection, DocumentData, getDocs } from "firebase/firestore";
import { FC, useState } from "react";
import StyledUserList from "./UserList.style";
import Image from "next/image";
import { db } from "../../../pages/api/firebase/firebase";
import Notification from "../../../common/components/notification/Notification.component";

interface User extends DocumentData {
    uid: string;
    displayName: string;
    photoURL: string;
    email: string,
}

const UserList: FC = () => {
    const [usersData, setUsersData] = useState<User[]>([]);
    const [filterValue, setFilterValue] = useState<string>("")

    const getUsersData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "usersData"));
            const userDataArray = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return { uid: doc.id, ...data } as User;
        });
            setUsersData(userDataArray);
            return (
                <Notification isVisible={true} content={"Pobrano"} />
            )
        
        } catch (error) {
          console.log(error);
        }
    };
    
    return (
        <StyledUserList>
            <h2>Lista użytkowników</h2>
            <input onChange={(e) => setFilterValue(e.target.value)} placeholder="Wyszukaj po UID, lub nazwie..." />
            <ul>
            {
                    usersData.filter(user => {
                        if (filterValue === "") {
                            return user
                        } else if (user.displayName.toLowerCase().includes(filterValue.toLowerCase()) || user.uid.toLowerCase().includes(filterValue.toLowerCase())) {
                            return user
                        }
                    }).map((user, index) => (
                        <li key={index}>
                            <Image width={30} height={30} alt={"profile picture"} src={user.photoURL}></Image>
                            <p>{user.displayName}</p>
                            <p>{user.email}</p>
                            <p>{user.uid}</p>
                        </li>
                        
                    ))
                }
            </ul>
            <button onClick={() => getUsersData()}>Pobierz</button>
       </StyledUserList> 
    )
}

export default UserList;