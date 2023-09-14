import {
  Stack,
  Badge,
  Avatar,
  Typography
} from "@mui/material";
import { useDispatch } from "react-redux";
import {
  updateChatId,
  updateCurrentChat,
  updateCurrentUser,
} from "../redux/slices/conversation";
import { socket } from "../socket";

const ChatElement = ({ _id, avatar, username, unread, status, email, chatId }) => {
  const dispatch = useDispatch();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      padding={1.5}
      borderRadius={1.5}
      sx={{
        backgroundColor: "#fff",
        alignItems: "center",
        ":hover": {
          cursor: "pointer",
        },
      }}
      onClick={() => {
        dispatch(updateCurrentUser({ _id, username, avatar, status, email }));
        dispatch(updateChatId(chatId));
        socket.emit("get_chat", { chatId }, (data) => {
          dispatch(updateCurrentChat(data));
        });
      }}
    >
      <Stack direction="row" alignItems="center">
        <Avatar src={avatar} alt={username} />

        <Stack marginLeft={2.5}>
          <Typography variant="subtitle1">{username}</Typography>
          <Typography variant="caption">{email}</Typography>
        </Stack>
      </Stack>

      {/* <Badge color="success" badgeContent={unread} sx={{ mr: "12px" }} /> */}
    </Stack>
  );
};

export default ChatElement;
