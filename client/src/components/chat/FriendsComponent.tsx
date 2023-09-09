import { Message } from "@mui/icons-material";
import { Stack, Avatar, Typography, IconButton, Paper } from "@mui/material";

const FriendsComponent = ({ _id, username, avatar }: any) => {
    
    return (
        <Paper elevation={3}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" p={1.5} bgcolor="#fff">
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar src={avatar} />
                    <Typography>{username}</Typography>
                </Stack>
                <IconButton>
                    <Message />
                </IconButton>
            </Stack>
        </Paper>
    );
}

export default FriendsComponent;