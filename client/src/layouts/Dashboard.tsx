import { Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {

    return (
        <Stack direction="row" width="100vw" height="100vh">
            <Sidebar />
            <Outlet />
        </Stack>
    );
}

export default Dashboard;