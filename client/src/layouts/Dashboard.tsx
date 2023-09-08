import { Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { connectSocket, socket } from "../socket";
import { showMessage } from "../redux/slices/snackbar";
import { useDispatch } from "react-redux";

const Dashboard = () => {

    const dispatch = useDispatch();
    const _id = "64f80bde4b71a7412ab18454";

    useEffect(() => {

        if(!socket) {
            connectSocket(_id);
        }

        socket.emit("test", { test: "Pass" });

        socket.on("recieve_friend_request", ({ severity, message }: any) => {
            dispatch(showMessage<any>({ severity, message }));
        });

        socket.on("is_sent_friend_request", ({ severity, message }: any) => {
            dispatch(showMessage<any>({ severity, message }));
        });

        socket.on("is_accepted_request", ({ severity, message }: any) => {
            dispatch(showMessage<any>({ severity, message }));
        });

        return () => {
            socket.off("recieve_friend_request");
            socket.off("is_sent_friend_request");
            socket.off("is_accepted_request");
        }

    }, [socket]);

    return (
        <Stack direction="row" width="100vw" height="100vh">
            <Sidebar />
            <Outlet />
        </Stack>
    );
}

export default Dashboard;