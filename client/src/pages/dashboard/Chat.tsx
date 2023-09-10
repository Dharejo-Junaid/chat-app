import { Stack } from "@mui/system";
import ChatsList from "../../components/chat/ChatsList";
import Conversation from "../../components/chat/conversation";
import Contact from "../../components/chat/Contact";
import { useDispatch, useSelector } from "react-redux";
import SharredMessages from "../../components/chat/SharredMessages";
import StarredMessages from "../../components/chat/StarredMessages";
import RightCover from "../../components/RightCover";
import { useEffect } from "react";
import { updateAllChats, updateCurrentChatMessages } from "../../redux/slices/conversation";
import { connectSocket, socket } from "../../socket";

const Chat = () => {

    const dispatch = useDispatch();
    const _id = window.localStorage.getItem("_id");
    const sidebar = useSelector((state: any) => state.sidebar);
    const { chatType, roomId } = useSelector((state: any) => state.app);

    const getAllChats = () => {

        if(! socket) connectSocket(_id);

        socket.emit("get_all_chats", {_id}, (data: any) => {
            dispatch(updateAllChats(data));
        });
    }

    useEffect(() => {
        getAllChats();
        socket.on("new_message", ({conversationId, message}: any) => {
            
            if(conversationId !== roomId) {
                console.log("get all chats");                
                getAllChats();
            }

            socket.emit("get_messages", { conversationId }, async (data: any) => {
                dispatch(updateCurrentChatMessages<any>(data.messages));
            });
        });
    
    }, []);

    return (
        <Stack direction="row" flexGrow={1} height="100vh">
            <ChatsList />

            { chatType==="inidividual" && roomId? <Conversation /> : <RightCover /> }
            
            {
                sidebar.open && (() => {
                    switch(sidebar.type) {
                        case "CONTACT": return <Contact />
                        case "SHARRED_MESSAGES": return <SharredMessages />
                        case "STARRED_MESSAGES": return <StarredMessages />
                    }
                })()
            }            
        </Stack>
    );
}

export default Chat;