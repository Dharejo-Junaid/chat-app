import { Stack } from "@mui/system";
import Chats from "../../components/chat/Chats";
import Conversation from "../../components/chat/conversation";
import Contact from "../../components/chat/Contact";
import { useDispatch, useSelector } from "react-redux";
import RightCover from "../../components/RightCover";
import { useEffect } from "react";
import { updateAllChats, updateCurrentChatMessages } from "../../redux/slices/conversation";
import { connectSocket, socket } from "../../socket";

const Chat = () => {

    const dispatch = useDispatch();
    const _id = window.localStorage.getItem("_id");
    const sidebar = useSelector((state) => state.sidebar);
    const { chatType, roomId } = useSelector((state) => state.app);

    const getAllChats = () => {

        if(! socket) connectSocket(_id);

        socket.emit("get_all_chats", {_id}, (data) => {
            dispatch(updateAllChats(data));
        });
    }

    useEffect(() => {
        getAllChats();
        socket.on("new_message", ({conversationId, message}) => {
            
            if(conversationId !== roomId) {
                console.log("get all chats");                
                getAllChats();
            }

            socket.emit("get_messages", { conversationId }, async (data) => {
                dispatch(updateCurrentChatMessages(data.messages));
            });
        });
    
    }, []);

    return (
        <Stack direction="row" flexGrow={1} height="100vh">
            <Chats />

            { chatType==="inidividual" && roomId? <Conversation /> : <RightCover /> }
            { sidebar.open && <Contact /> }

        </Stack>
    );
}

export default Chat;