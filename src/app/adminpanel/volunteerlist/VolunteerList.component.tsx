import { getDocs, collection, DocumentData, limit, query, where, orderBy } from "firebase/firestore";
import { FC, useState } from "react";
import { db } from "../../../pages/api/firebase/firebase";
import StyledVolunteerList from "./VolunteerList.style";
import Notification from "../../../common/components/notification/Notification.component";

interface Volunteer extends DocumentData {
    uid: string;
    name: string;
}

const VolunteerList: FC = () => {

    const [volunteersData, setVolunteersData] = useState<Volunteer[]>([]);
    const [filterValue, setFilterValue] = useState<string>("")
    const [pageIndex, setPageIndex] = useState({
        from: 0,
        to: 1,
    })

    const usersPerPage = 2;

    const getVolunteersData = async () => {
        try {
            const q = query(collection(db, "chats"))
            const querySnapshot = await getDocs(q);
            const volunteerDataArray = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return { uid: doc.id, ...data } as Volunteer;
        });
            setVolunteersData(volunteerDataArray);
            console.log(volunteersData)
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <StyledVolunteerList>
            <h2>Lista wolontariuszy</h2>
            <input onChange={(e) => setFilterValue(e.target.value)} placeholder="Wyszukaj po UID, lub nazwie..." />
            <ul>
                {
                    volunteersData.slice(pageIndex.from, pageIndex.to).filter(volunteer => {
                        if (filterValue === "") {
                            return volunteer
                        } else if (volunteer.name.toLowerCase().includes(filterValue.toLowerCase()) || volunteer.uid.toLowerCase().includes(filterValue.toLowerCase())) {
                            return volunteer
                        }
                    }).map((volunteer, index) => (
                        <li key={index}>
                            <p>{volunteer.name}</p>
                            <p>{volunteer.uid}</p>
                        </li>
                    ))
                }
            </ul>
            <button onClick={() => getVolunteersData()}>Pobierz</button>
            <button onClick={() => {
                    if (pageIndex.to <= volunteersData.length) {
                        setPageIndex({
                            to: pageIndex.to + usersPerPage,
                            from: pageIndex.from,
                        });
                    }
                }} disabled={volunteersData.length === 0 || pageIndex.to >= volunteersData.length}>nastepna</button>
            <button onClick={() => {
                    if (pageIndex.from > usersPerPage) {
                        setPageIndex({
                            to: pageIndex.to + usersPerPage,
                            from: pageIndex.from,
                        });
                    }
                }} disabled={pageIndex.to === 0}></button>
        </StyledVolunteerList>
    )
};

export default VolunteerList;
