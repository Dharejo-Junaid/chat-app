import { Stack } from "@mui/system";
import ChatsList from "../../components/chat/ChatsList";
import Conversation from "../../components/chat/conversation";
import Contact from "../../components/chat/Contact";
import { useDispatch, useSelector } from "react-redux";
import SharredMessages from "../../components/chat/SharredMessages";
import StarredMessages from "../../components/chat/StarredMessages";
import RightCover from "../../components/RightCover";
import { useEffect } from "react";
import { connectSocket, socket } from "../../socket";
import { updateOneToOneConversations } from "../../redux/slices/conversation";

const Chat = () => {
    
    const _id = window.localStorage.getItem("_id");

    const sidebar = useSelector((state: any) => state.sidebar);
    const { chatType, roomId } = useSelector((state: any) => state.app);
    const dispatch = useDispatch();

    useEffect(() => {

        if(! socket) {updateOneToOneConversations
            connectSocket(_id);
        }

        socket.emit("get_one_to_one_conversations", {_id}, (data: any) => {
            console.log("All converstions = ", data);
            
            dispatch(updateOneToOneConversations(data));
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