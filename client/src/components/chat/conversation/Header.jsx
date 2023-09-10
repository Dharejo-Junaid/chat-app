import { Stack, Avatar, Typography, IconButton } from "@mui/material";
import { Phone, VideoCamera, CaretDown } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../../redux/slices/sidebar";
import React from "react";

const Header = () => {

    const dispatch = useDispatch();
    const currentChat = useSelector((state) => state.conversation.chats.currentChat);

    return (
        <Stack
            maxWidth="100%"
            height="60px"
            p={1}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ backgroundColor: "#F8FAFF", boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)" }}
        >

            <Stack
                onClick={ () => dispatch(toggleSidebar()) }
                direction="row"
                spacing={2}
                sx={{
                    ":hover": {
                        cursor: "pointer"
                    }
                }}
            >
                <Avatar src={currentChat.img} alt="J"/>
                <Stack>
                    <Typography>{currentChat.name}</Typography>
                    <Typography variant="caption">{currentChat.status? "Online" : "Offline"}</Typography>
                </Stack>
            </Stack>

            <Stack direction="row" spacing={1.5} marginRight={2}>
                <IconButton>
                    <Phone color="#080707"/>
                </IconButton>
                <IconButton>
                    <VideoCamera color="#080707"/>
                </IconButton>
                <IconButton size="small"><CaretDown color="#080707"/></IconButton>
            </Stack>
        </Stack>
    );
}

export default Header;