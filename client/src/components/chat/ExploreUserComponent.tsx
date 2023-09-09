import { Avatar, Button, Paper, Stack, Typography } from "@mui/material";
import { socket } from "../../socket";
import { showMessage } from "../../redux/slices/snackbar";
import { useDispatch } from "react-redux";

const ExploreUserComponent = ({ _id, username, avatar }: any) => {
    
    const from = window.localStorage.getItem("_id");
    const dispatch = useDispatch();

    return (
        <Paper elevation={3}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" p={1.5} bgcolor="#fff">
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar src={avatar} />
                    <Typography>{username}</Typography>
                </Stack>

                <Button onClick={() => {
                    socket.emit("send_friend_request", { from, to: _id }, ({isSent}: any) => {
                        if(isSent) dispatch(showMessage<any>({ severity: "success", message: "Friend request has been sent" }));
                        else dispatch(showMessage<any>({ severity: "error", message: "Request can not be send at this movement" }));
                    });
                }}>
                    Send request
                </Button>
            </Stack>
        </Paper>
    );
}

export default ExploreUserComponent;