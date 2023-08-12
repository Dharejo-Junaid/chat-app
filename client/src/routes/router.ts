import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";

const router = createBrowserRouter([

    {
        path: "/",
        Component: Dashboard
    },

    {
        path: "/auth/signup",
        Component: Signup
    },

    {
        path: "auth/login",
        Component: Login
    }
]);

export default router;