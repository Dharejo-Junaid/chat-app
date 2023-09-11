import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { showToast } from "../../redux/slices/app";
import { useDispatch } from "react-redux";

const Signup = () => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleUser = (event) => {
    const { name, value } = event.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/auth/signup", user);
      const { message, severity } = res.data;
      dispatch(showToast({ message, severity }));
    } catch (err) {
      console.log(err.message);
    }

    setLoading(false);
  };

  return (
    <>
      <Typography variant="h5" m="16px" align="center">
        Get Started with Pied Piper
      </Typography>

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

          <Button
            variant="contained"
            type="submit"
            disabled={loading}
            startIcon={loading && <CircularProgress size={20} />}
          >
            Register
          </Button>

          <Typography align="center">
            Already have an account?
            <Link to="/auth/login">
              <Button>Login</Button>
            </Link>
          </Typography>
        </Stack>
      </form>
    </>
  );
};

export default Signup;
