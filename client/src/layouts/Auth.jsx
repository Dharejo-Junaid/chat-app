import { Stack, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import Toast from "../components/Toast";

const Auth = () => {    

    return (
        <>
            <Stack height="100vh" justifyContent="center" alignItems="center">
                <Paper elevation={8} sx={{ padding: "32px" }}>
                    <Outlet />
                </Paper>
            </Stack>

            <Toast />
        </>
    )
}

export default Auth;