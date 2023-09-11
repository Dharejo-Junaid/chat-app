import {
  Button,
  Stack,
  TextField,
  Typography,
  Link,
  CircularProgress,
} from "@mui/material";
import { CaretLeft } from "@phosphor-icons/react";
import axios from "axios";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/slices/app";

const ForgetPassword = () => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/forget-password",
        { email }
      );
      const { message, severity } = res.data;
      dispatch(showToast({ message, severity }));
    } catch (err) {}

    setLoading(false);
  };

  return (
    <>
      <Typography variant="h5" m="16px" align="center">
        Forget your password?
      </Typography>

      <Typography my={3} color="gray" variant="body2">
        Please enter the email address associated with your account and <br />{" "}
        we will email you a link to reset your password
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={3} width="450px">
          <TextField
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={handleEmail}
            required
            autoFocus
          />

          <Button
            variant="contained"
            type="submit"
            disabled={loading}
            startIcon={loading && <CircularProgress size={20} />}
          >
            Send Request
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

export default ForgetPassword;
