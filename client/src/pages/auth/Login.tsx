import { Button, Stack, TextField, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {

    const [ user, setUser ] = useState({
        username: "",
        password: ""
    });

    const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        console.log( { name, value } );
        setUser( (prev) => {
            return {
                ...prev, [name]: value
            }
        } );
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log({ ...user });
    }

    return (
        <>
            <Typography variant="h5" m="16px" align="center">Welcome on Pied Piper</Typography>
            
            <form onSubmit={handleSubmit}>
                <Stack spacing={3} width="450px">
                    <TextField
                        name="username"
                        label="Username"
                        value={user.username}
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

                    <Button variant="contained" type="submit">Login</Button>

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