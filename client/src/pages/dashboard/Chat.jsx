import { Stack } from "@mui/system";
import Chats from "../../components/chat/Chats";
import Conversation from "../../components/chat/conversation";
import Contact from "../../components/chat/Contact";
import { useDispatch, useSelector } from "react-redux";
import RightCover from "../../components/RightCover";
import { useEffect } from "react";
import { connectSocket, socket } from "../../socket";
import { updateAllChats, updateCurrentChat } from "../../redux/slices/conversation";

const Chat = () => {
  const _id = window.localStorage.getItem("_id");

  const dispatch = useDispatch();
  const { contactBar } = useSelector((state) => state.app);
  const { chatType, chatId } = useSelector((state) => state.conversation);

  const getAllChats = () => {
    socket.emit("get_all_chats", { _id }, (data) => {
      dispatch(updateAllChats(data));
    });
  }

  useEffect(() => {
    if(!socket) {
      connectSocket(_id);
      getAllChats();
    }
    
    // data => chatId, message
    socket.on("new_message", (data) => {
      if (data.chatId !== chatId) {
        getAllChats();
      }

      socket.emit("get_chat", { chatId: data.chatId }, (messages) => {
        dispatch(updateCurrentChat(messages));
      });
    });
  }, []);

  return (
    <Stack direction="row" flexGrow={1} height="100vh">
      <Chats />

      {chatType === "inidividual" && chatId ? <Conversation /> : <RightCover />}
      {contactBar.open && <Contact />}
    </Stack>
  );
};

export default Chat;
