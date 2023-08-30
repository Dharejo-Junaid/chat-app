import { Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showMessage } from "../../redux/slices/snackbar";

const Signup = () => {

    const [ loading, setLoading ] = useState(false);
    const dispatch = useDispatch();

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
        });
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true);
        const res = await axios.post("http://localhost:5000/auth/signup", user);
        const { status, message } = res.data;
        const type = status==="success"? "success" : "error";
        dispatch(showMessage<any>({ message, type}));

        setLoading(false);
    }

    return (
        <>
            <Typography variant="h5" m="16px" align="center">Get Started with Pied Piper</Typography>

            <form onSubmit={handleSubmit}>
                <Stack spacing={3} width="450px">
                    <TextField name="username" label="Username" value={user.username} onChange={handleUser} required/>
                    <TextField name="email" label="Email" value={user.email} onChange={handleUser} required/>
                    <TextField name="password" label="Password" type="password" value={user.password} onChange={handleUser} required/>
                    
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={loading}
                        startIcon={ loading && <CircularProgress size={20}/> }
                    >
                        Register</Button>

                    <Typography align="center">
                        Already have an account?
                        <Link to="/auth/login"><Button>Login</Button></Link>
                    </Typography>
                </Stack>
            </form>
        </>
    );
}

export default Signup;