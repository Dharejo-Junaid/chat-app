import { Stack, Avatar, Typography, Button, Paper } from "@mui/material";
import { socket } from "../../socket";
import { useDispatch } from "react-redux";
import { fetchRequests } from "../../redux/slices/app";
import { showMessage } from "../../redux/slices/snackbar";

const RequestComponent = ({ _id, sender, createdAt }) => {

    const dispatch = useDispatch();

    const acceptRequest = () => {    
        socket.emit("accept_friend_request", { requestId: _id }, () => {
            dispatch(showMessage({ severity: "success", message: "You just created a new connection" }))
            dispatch(fetchRequests());
        });
    }

    return (
        <Paper elevation={3}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" p={1.5} bgcolor="#fff">
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar src={sender.avatar} />
                    <Stack>
                        <Typography>{sender.username}</Typography>
                        <Typography variant="caption">{createdAt}</Typography>
                    </Stack>
                </Stack>
                <Button onClick={acceptRequest} > Accept </Button>
            </Stack>
        </Paper>
    );
}

export default RequestComponent;