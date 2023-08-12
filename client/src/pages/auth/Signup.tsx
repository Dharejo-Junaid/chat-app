import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {

    const [ user, setUser ] = useState({
        username: "",
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
        } );
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log({ ...user });
    }

    return (
        <Stack height="100vh" justifyContent="center" alignItems="center">
        <Paper elevation={8} sx={{ padding: "32px" }}>
            <Typography variant="h5" m="16px" align="center">Get Started with Twak</Typography>
            
            <form onSubmit={handleSubmit}>
                <Stack spacing={3} width="450px">
                    <TextField name="username" label="Username" value={user.username} onChange={handleUser} required/>
                    <TextField name="email" label="Email" value={user.email} onChange={handleUser} required/>
                    <TextField name="password" label="Password" type="password" value={user.password} onChange={handleUser} required/>
                    <Button variant="contained" type="submit">Register</Button>

                    <Typography align="center">
                        Already have an account?
                        <Link to="/auth/login"><Button>Login</Button></Link>
                    </Typography>
                </Stack>
            </form>
        </Paper>
        </Stack>
    );
}

export default Signup;