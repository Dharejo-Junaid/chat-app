import { faker } from "@faker-js/faker";
import { Avatar, Button, Paper, Stack, Typography } from "@mui/material";
import { socket } from "../../socket";
import { showMessage } from "../../redux/slices/snackbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ExploreUserComponent = ({ _id, username, avatar }: any) => {
    
    const from = window.localStorage.getItem("_id");
    if(!from) useNavigate()("/login");

    const dispatch = useDispatch();
    

    return (
        <Paper elevation={3}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" p={1.5} bgcolor="#fff">
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar src={avatar} />
                    <Typography>{username}</Typography>
                </Stack>

                <Button onClick={() => {
                    socket.emit("send_friend_request", { from, to: _id }, () => {
                        dispatch(showMessage<any>({ severity: "success", message: "Request sent" }));
                    });
                }}>
                    Send request
                </Button>
            </Stack>
        </Paper>
    );
}

export default ExploreUserComponent;