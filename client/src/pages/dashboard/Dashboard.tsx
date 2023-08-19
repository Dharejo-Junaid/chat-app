import { Stack } from "@mui/system";
import Chats from "../../components/chats/Chats";
import Sidebar from "../../components/Sidebar";
import Conversation from "../../components/conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharredMessages from "../../components/SharredMessages";
import StarredMessages from "../../components/StarredMessages";

const Dashboard = () => {

    const sidebar = useSelector((state: any) => state.app.sidebar);
    console.log("Sidebar = ", sidebar);
    

    return (
        <Stack direction="row" maxWidth="100vw" height="100vh" maxHeight="100vh">
            <Sidebar />
            <Chats />
            <Conversation />

            {
                sidebar.open && sidebar.type === "CONTACT" && <Contact />
            }

            {
                sidebar.open && sidebar.type === "SHARRED_MESSAGES" && <SharredMessages />
            }

            {
                sidebar.open && sidebar.type === "STARRED_MESSAGES" && <StarredMessages />
            }
            
        </Stack>
    );
}

export default Dashboard;