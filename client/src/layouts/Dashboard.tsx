import { Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { connectSocket, socket } from "../socket";
import { useDispatch } from "react-redux";
import Toast from "../components/Toast";
import React from "react";
import { showToast } from "../redux/slices/app";

const Dashboard = () => {
  const dispatch = useDispatch();
  const _id = window.localStorage.getItem("_id");

  useEffect(() => {
    if (!socket) {
      connectSocket(_id);
    }

    socket.on("recieve_friend_request", ({ severity, message }) => {
      showToast({ severity, message });
    });

    socket.on("friend_request_accepted", ({ severity, message }) => {
      showToast({ severity, message });
    });

    return () => {
      socket?.off("recieve_friend_request");
      socket?.off("friend_request_accepted");
    };
  }, [socket]);

  return (
    <>
      <Stack direction="row" width="100vw" height="100vh">
        <Sidebar />
        <Outlet />
      </Stack>

      <Toast />
    </>
  );
};

export default Dashboard;
