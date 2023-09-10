import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import ForgetPassword from "../pages/auth/ForgetPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import AuthLayout from "../layouts/Auth";
import DashboardLayout from "../layouts/Dashboard";
import Settings from "../pages/dashboard/Settings";
import Page404 from "../pages/Page404";
import Chat from "../pages/dashboard/Chat";
import Group from "../pages/dashboard/Group";
import Call from "../pages/dashboard/Call";
import Profile from "../pages/dashboard/Profile";

const router = createBrowserRouter([
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "signup",
                Component: Signup,
            },

            {
                "path": "login",
                Component: Login
            },

            {
                path: "forgetpassword",
                Component: ForgetPassword
            },

            {
                path: "resetpassword/:token",
                Component: ResetPassword
            }
        ]
    },

    {
        path: "/",
        Component: DashboardLayout,
        children: [
            {
                path: "chat",
                Component: Chat
            },

            {
                path: "group",
                Component: Group
            },

            {
                path: "call",
                Component: Call
            },

            {
                path: "profile",
                Component: Profile
            },

            {
                path: "settings",
                Component: Settings
            }
        ]
    },

    {
        path: "*",
        Component: Page404
    }
]);

export default router;