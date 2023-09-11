import { Stack, Avatar, Typography, IconButton } from "@mui/material";
import { Phone, VideoCamera, CaretDown } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { toggleContactBar } from "../../../redux/slices/app";

const Header = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.conversation.chats);

  return (
    <Stack
      maxWidth="100%"
      height="40px"
      px={2}
      py={1}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        backgroundColor: "#F8FAFF",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack
        onClick={() => dispatch(toggleContactBar())}
        direction="row"
        spacing={2}
        sx={{
          ":hover": {
            cursor: "pointer",
          },
        }}
      >
        <Avatar src={currentUser.avatar} alt={currentUser.username} />
        <Stack>
          <Typography>{currentUser.username}</Typography>
          <Typography variant="caption">
            {currentUser.status}
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1.5} marginRight={2}>
        <IconButton>
          <Phone size={20} color="#080707" />
        </IconButton>
        <IconButton>
          <VideoCamera size={20} color="#080707" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Header;
