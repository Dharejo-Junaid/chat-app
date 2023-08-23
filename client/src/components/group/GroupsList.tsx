import { Typography, Stack, IconButton, Button, Divider } from "@mui/material";
import Searchbar from "../Searchbar";
import { Plus } from "@phosphor-icons/react";
import ChatElement from "../ChatElement";
import { ChatList } from "../../contents/data";
import { useState } from "react";
import CreateNewGroupDialog from "./CreateNewGroupDialog";

const GroupsList = () => {

    const [ openDialog, setOpenDialog ] = useState(false);

    const handleDialogClose = () => {
        setOpenDialog(false);
    }

    return (
        <Stack 
            p={2}
            maxHeight="100%"
            minWidth="300px"
            maxWidth="300px"
            sx={{ 
                backgroundColor: "#F8FAFF",
                overflowY: "scroll"
            }}
            spacing={2}
        >
            <Typography variant="h6" m={2}>Groups</Typography>

            <Searchbar />

            <Button
                onClick={() => setOpenDialog((prev) => !prev)}
                sx={{ display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Typography
                    variant="subtitle2"
                    sx={{ textTransform: "capitalize" }}
                >
                    Create Group
                </Typography>
                <Plus size={16} color="#080707"/>
            </Button>

            <Divider />

            <Stack spacing={1} marginTop={2}>
                <Typography variant="caption">All chats</Typography>
                {
                    ChatList.map( (el) => {
                        return <ChatElement { ...el } />
                    } )
                }
            </Stack>

            {
                openDialog && <CreateNewGroupDialog open={openDialog} hanldeClose={handleDialogClose}/>
            }

        </Stack>
    );
}

export default GroupsList;