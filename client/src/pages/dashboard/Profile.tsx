import { Typography, Stack, IconButton, Avatar, TextField, Button, Paper } from "@mui/material";
import { ArrowLeft } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RightCover from "../../components/RightCover";

const Profile = () => {

    const currentChat = useSelector((state: any) => state.conversation.chats.currentChat);

    const navigate = useNavigate();

    return (
        <Stack direction="row" flexGrow={1} height="100vh">
            <Stack 
                p="24px"
                maxHeight="100%"
                minWidth="300px"
                maxWidth="300px"
                bgcolor="#F8FAFF"
                spacing={2}
            >
                <Stack direction="row" alignItems="center" spacing={2}>
                    <IconButton onClick={() => {
                        navigate("/chat");
                    }}><ArrowLeft color="#080707"/></IconButton>
                    <Typography variant="h6">Profile</Typography>
                </Stack>

                <Paper elevation={4} sx={{ alignSelf: "center" ,maxWidth: "100px", maxHeight: "100px", p: "5px", borderRadius: "100px" }}>
                <Avatar
                    src={currentChat.img}
                    sx={{ width: "100px", height: "100px", alignSelf: "center" }}
                />
                </Paper>

                <TextField label="Name" size="small"/>
                <Typography variant="caption" color="gray">
                    This name is visible to your contacts
                </Typography>

                <TextField label="About" size="small"/>
                <Button variant="outlined" sx={{ alignSelf: "end", px: "40px" }}>Save</Button>


            </Stack>
            <RightCover />
        </Stack>
    );
}

export default Profile;