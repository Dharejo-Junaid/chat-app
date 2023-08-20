import { Button, Stack, TextField, Typography, Link } from "@mui/material";
import { CaretLeft } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const ForgetPassword = () => {

    const [ email, setEmail ] = useState("");

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(email);
    }

    return (
        <>
            <Typography variant="h5" m="16px" align="center">Forget your password?</Typography>
            
            <Typography my={3} color="gray" variant="body2">
                Please enter the email address associated with your account and <br /> we will email you a link to reset your password
            </Typography>

            <form onSubmit={handleSubmit}>
                <Stack spacing={3} width="450px">
                    <TextField name="email" label="Email" type="email" value={email} onChange={handleEmail} required autoFocus/>
                    <Button variant="contained" type="submit">Send Request</Button>
                    <Link variant="body2" underline="hover" component={RouterLink} to="/auth/login">
                        <CaretLeft /> Return to login?
                    </Link>
                </Stack>
            </form>
        </>
    );
}

export default ForgetPassword;