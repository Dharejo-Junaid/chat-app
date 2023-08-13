import { Typography, Stack } from "@mui/material";
import Searchbar from "./Searchbar";
import { ChatList } from "../contents/data";
import ChatElement from "./ChatElement";

const Chats = () => {

    return (
        <Stack 
            p="16px" 
            minHeight="100%"
            width="300px"
            sx={{ backgroundColor: "#F8FAFF" }}
        >
            <Typography variant="h6">Chats</Typography>
            <Searchbar />

            <Stack spacing={1.5}>
            {
                ChatList.map( (el) => {
                    return <ChatElement { ...el }/>
                } )
            }
            </Stack>
        </Stack>
    );
}

export default Chats;