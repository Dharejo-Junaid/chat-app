import { Typography, Stack, IconButton } from "@mui/material";
import Searchbar from "./Searchbar";
import { ChatList } from "../../contents/data";
import ChatElement from "./ChatElement";
import { CircleDashed } from "@phosphor-icons/react";

const Chats = () => {

    return (
        <Stack 
            p="12px"
            maxHeight="100%"
            minWidth="300px"
            maxWidth="300px"
            sx={{ 
                backgroundColor: "#F8FAFF",
                overflowY: "scroll"
            }}
        >
            <Stack direction="row" justifyContent="space-between" marginBottom={1}>
                <Typography variant="h6">Chats</Typography>
                <IconButton><CircleDashed color="#080707"/></IconButton>
            </Stack>

            <Searchbar />

            <Stack spacing={1} marginTop={2}>
                <Typography variant="caption">All chats</Typography>
                {
                    ChatList.map( (el) => {
                        return <ChatElement { ...el } />
                    } )
                }
            </Stack>
        </Stack>
    );
}

export default Chats;