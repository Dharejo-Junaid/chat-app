import { Stack, TextField, InputAdornment, IconButton, Box, Button } from "@mui/material";
import { Smiley, TelegramLogo } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "@phosphor-icons/react";
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

const Footer = () => {
    
    const [userMessage, setUserMessage] = useState("");
    const [ openEmoiPicker, setOpenEmojiPicker ] = useState(false);
    
    return (
        <Stack
            maxWidth="100%"
            padding="8px 28px 8px 28px"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            sx={{ backgroundColor: "#F8FAFF", boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)"}}
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
                            <InputAdornment position="start">
                                <IconButton><Link /></IconButton>
                            </InputAdornment>,

                        endAdornment:
                            <InputAdornment position="end">
                                <IconButton onClick={() => {
                                    setOpenEmojiPicker((prev) => !prev);
                                }}><Smiley /></IconButton>
                            </InputAdornment>
                    }}
                />
                <Box display={ openEmoiPicker? "auto" : "none" } position="fixed" bottom="50px" right="50px">
                    <Picker data={data} theme="light" onEmojiSelect={(obj: any) => {
                        setUserMessage((prev) => `${prev}${obj.native}`);
                    }}/>
                </Box>
            </Stack>
            
            <Button variant="contained" sx={{ maxWidth: "40px", height: "40px" }}><TelegramLogo size="large"/></Button>
        </Stack>
    );
}

export default Footer;