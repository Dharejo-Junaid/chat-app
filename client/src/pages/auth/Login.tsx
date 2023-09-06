import { Button, Stack, TextField, Typography, Link, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { showMessage } from "../../redux/slices/snackbar";
import { useDispatch } from "react-redux";

const Login = () => {

    const [ loading, setLoading ] = useState(false);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [ user, setUser ] = useState({
        email: "",
        password: ""
    });

    const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        console.log( { name, value } );
        setUser( (prev) => {
            return {
                ...prev, [name]: value
            }
        });
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true);

        const res = await axios.post("http://localhost:5000/auth/login", user);
        const { status, message } = res.data;
        const type = status==="success"? "success" : "error";
        dispatch(showMessage<any>({ message, type}));

        setLoading(false);
        if(status === "success") {
            navigate("/chat");
        }
    }

    return (
        <>
            <Typography variant="h5" m="16px" align="center">Welcome on Pied Piper</Typography>
            
            <form onSubmit={handleSubmit}>
                <Stack spacing={3} width="450px">
                    <TextField
                        name="email"
                        label="Email"
                        value={user.email}
                        onChange={handleUser}
                        required
                    />
                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        value={user.password}
                        onChange={handleUser}
                        required
                    />

                    <Link
                        component={RouterLink}
                        to="/auth/forgetpassword"
                        variant="caption"
                        underline="hover"
                    >
                        Forget password?
                    </Link>

                    <Button
                        variant="contained"
                        type="submit"
                        disabled={loading}
                        startIcon={ loading && <CircularProgress size={20}/>}
                    >
                        Login
                    </Button>

                    <Typography align="center">
                        Don't have an account?
                        <Link component={RouterLink} to="/auth/signup">
                            <Button>Register</Button>
                        </Link>
                    </Typography>
                </Stack>
            </form>
        </>
    );
}

export default Login;