import { Stack, TextField, InputAdornment, IconButton, Box } from "@mui/material";
import { Link } from "@phosphor-icons/react";
import { useState } from "react";
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import ConversationSpeedDial from "./SpeedDial";
import { Send, SentimentSatisfiedAlt } from "@mui/icons-material";
import { socket } from "../../../socket";
import { useSelector } from "react-redux";

const Footer = () => {
    
    const [ userMessage, setUserMessage ] = useState("");
    const [ openEmoiPicker, setOpenEmojiPicker ] = useState(false);
    const [ openSpeedDial, setOpenSpeedDial ] = useState(false);

    const roomId = useSelector((state: any) => state.app.roomId);

    const sendMessage = (event: any) => {
        event.preventDefault();

        socket.emit("text_message", { conversationId: roomId, message: userMessage }, () => {

        });

        setUserMessage("");
    }
    
    return (
        <Stack
            maxWidth="100%"
            padding="8px 28px 8px 28px"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            sx={{ backgroundColor: "#F8FAFF" }}
        >
            <Stack direction="row" width="100%">
                <TextField
                    value={userMessage}
                    onChange={(event) => setUserMessage(event.target.value)}
                    placeholder="Write a message..."
                    size="small" 
                    fullWidth
                    sx={{ backgroundColor: "white"}}
                    InputProps={{
                        startAdornment:
                            <Stack>
                                { openSpeedDial && <ConversationSpeedDial /> }
                                <InputAdornment position="start">
                                    <IconButton onClick={() => setOpenSpeedDial(!openSpeedDial)}> <Link  color="#4B4B4B"/> </IconButton>
                                </InputAdornment>
                            </Stack>,

                        endAdornment:
                            <InputAdornment position="end">
                                <IconButton onClick={() => {
                                    setOpenEmojiPicker((prev) => !prev);
                                }}><SentimentSatisfiedAlt sx={{ color: "#4B4B4B"}} /></IconButton>
                            </InputAdornment>
                    }}
                />
                <Box display={ openEmoiPicker? "auto" : "none" } position="fixed" bottom="50px" right="50px">
                    <Picker data={data} theme="light" onEmojiSelect={(obj: any) => {
                        setUserMessage((prev) => `${prev}${obj.native}`);
                    }}/>
                </Box>
            </Stack>
            
            <IconButton
                onClick={sendMessage}
            >
                <Send sx={{color: "#080707"}}/>
            </IconButton>
        </Stack>
    );
}

export default Footer;