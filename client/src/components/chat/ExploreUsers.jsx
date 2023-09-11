import { Avatar, Button, Paper, Stack, Typography } from "@mui/material";
import { socket } from "../../socket";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/slices/app";

const ExploreUserComponent = ({ _id, username, avatar }) => {
  const from = window.localStorage.getItem("_id");

  const sendFriendReuquest = (from, to) => {
    socket.emit("send_friend_request", { from, to }, () => {
      showToast({
        severity: "success",
        message: "Friend request has been sent",
      });
    });
  };

  return (
    <Paper elevation={3}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        p={1.5}
        bgcolor="#fff"
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar src={avatar} />
          <Typography>{username}</Typography>
        </Stack>

        <Button onClick={() => sendFriendReuquest(from, _id)}>
          {" "}
          Send request{" "}
        </Button>
      </Stack>
    </Paper>
  );
};

export default ExploreUserComponent;
