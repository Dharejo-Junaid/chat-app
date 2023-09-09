import { Stack, Avatar, Typography, Button, Paper } from "@mui/material";
import { socket } from "../../socket";
import { showMessage } from "../../redux/slices/snackbar";
import { useDispatch } from "react-redux";
import { fetchRequests } from "../../redux/slices/app";

const RequestComponent = ({ _id, sender, createdAt }: any) => {

    const dispatch = useDispatch();
    
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
                <Button onClick={() => {
                    socket.emit("accept_friend_request", { requestId: _id }, () => {
                        dispatch(showMessage<any>({ severity: "success", message: "You just created a new connection" }))
                    });
                    dispatch<any>(fetchRequests());
                }}>
                    Accept
                </Button>
            </Stack>
        </Paper>
    );
}

export default RequestComponent;