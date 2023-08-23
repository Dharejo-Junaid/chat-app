import { Stack } from "@mui/system";
import ChatsList from "../../components/chat/ChatsList";
import Conversation from "../../components/chat/conversation";
import Contact from "../../components/chat/Contact";
import { useSelector } from "react-redux";
import SharredMessages from "../../components/chat/SharredMessages";
import StarredMessages from "../../components/chat/StarredMessages";

const Chat = () => {

    const sidebar = useSelector((state: any) => state.app.sidebar);

    return (
        <Stack direction="row" flexGrow={1} height="100vh">
            <ChatsList />
            <Conversation />
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