import { Button, Stack, TextField, Typography, Link, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {

    const [ loading, setLoading ] = useState(false);
    const [ message, setMessage ] = useState("");

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
        console.log(res.data);
        setMessage(res.data.message);

        setLoading(false);
    }

    return (
        <>
            <Typography variant="h5" m="16px" align="center">Welcome on Pied Piper</Typography>
            <Typography variant="subtitle1" m="16px" align="center">{message}</Typography>
            
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