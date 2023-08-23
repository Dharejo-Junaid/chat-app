import { Stack } from "@mui/system";
import ChatsList from "../../components/chats/ChatsList";
import Conversation from "../../components/chats/conversation";
import Contact from "../../components/chats/Contact";
import { useSelector } from "react-redux";
import SharredMessages from "../../components/chats/SharredMessages";
import StarredMessages from "../../components/chats/StarredMessages";

const Dashboard = () => {

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

export default Dashboard;