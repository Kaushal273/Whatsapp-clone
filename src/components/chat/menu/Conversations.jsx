import { useEffect, useState } from "react";
import { getUsers } from "../../../service/api";
import Conversation from "./Conversation";
import { Box } from "@mui/material";


const Conversations = () => {

    const[users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            setUsers(response);
        }
        fetchData();
    },[]);
    return(
        <Box>
            {
                users.map(() => (
                    <Conversation user={users}/>
                ))
            }
        </Box>
    )
}

export default Conversations;