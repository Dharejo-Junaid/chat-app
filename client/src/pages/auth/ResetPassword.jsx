import { Button, Stack, TextField, Typography, Link } from "@mui/material";
import { CaretLeft } from "@phosphor-icons/react";
import axios from "axios";
import React, { useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();

  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handlePassword = (event) => {
    const { name, value } = event.target;
    setPassword((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/auth/reset-password",
        {
          token: "bearer jhSVGUXFgshgfbhdbxjhfbj",
          password: password.newPassword,
        }
      );
    } catch (err) {}
  };

  return (
    <>
      <Typography variant="h5" m="16px" align="center">
        Reset password
      </Typography>

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
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Link
            variant="body2"
            underline="hover"
            component={RouterLink}
            to="/auth/login"
          >
            <CaretLeft /> Return to login?
          </Link>
        </Stack>
      </form>
    </>
  );
};

export default ResetPassword;
