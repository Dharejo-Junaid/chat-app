import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";

const router = createBrowserRouter([
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