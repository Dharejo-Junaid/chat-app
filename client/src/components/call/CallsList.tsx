import { Typography, Stack, Button, Divider } from "@mui/material";
import Searchbar from "../Searchbar";
import { Phone } from "@phosphor-icons/react";
import { useState } from "react";
import CallElement from "../CallElement";
import { CALL_LOGS } from "../../contents/data";
import StartConversationDialog from "./CallDialog";

const CallsList = () => {

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
            <Typography variant="h6">Call Logs</Typography>

            <Searchbar />

            <Button
                onClick={() => setOpenDialog((prev) => !prev)}
                sx={{ display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Typography
                    variant="subtitle2"
                    sx={{ textTransform: "capitalize" }}
                >
                    Start conversation
                </Typography>
                <Phone size={20} color="blue"/>
            </Button>

            <Divider />

            <Stack spacing={1} marginTop={2}>
                <Typography variant="caption">All calls</Typography>
                {
                    CALL_LOGS.map( (el: any) => {
                        return <CallElement key={el._id} { ...el } />
                    } )
                }
            </Stack>

            {
                openDialog && <StartConversationDialog open={openDialog} hanldeClose={handleDialogClose}/>
            }

        </Stack>
    );
}

export default CallsList;