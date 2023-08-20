import { Button, Stack, TextField, Typography, Link } from "@mui/material";
import { CaretLeft } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const ResetPassword = () => {

    const [ password, setPassword ] = useState({
        newPassword: "",
        confirmPassword: ""
    });

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPassword((prev: typeof password) => {
            return {...prev, [name]: value}
        });
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log({ ...password });
    }

    return (
        <>
            <Typography variant="h5" m="16px" align="center">Reset password</Typography>
            
            <Typography my={3} color="gray" variant="body2">
                Please set your new password
            </Typography>

            <form onSubmit={handleSubmit}>
                <Stack spacing={3} width="450px">
                    <TextField
                        name="newPassword"
                        label="New Password"
                        type="password"
                        value={password.newPassword}
                        onChange={handlePassword}
                        required
                        autoFocus
                    />
                    <TextField
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        value={password.confirmPassword}
                        onChange={handlePassword}
                        required
                    />
                    <Button variant="contained" type="submit">Submit</Button>
                    <Link variant="body2" underline="hover" component={RouterLink} to="/auth/login">
                        <CaretLeft /> Return to login?
                    </Link>
                </Stack>
            </form>
        </>
    );
}

export default ResetPassword;