import { Stack } from "@mui/system";
import Chats from "../../components/chats/Chats";
import Sidebar from "../../components/Sidebar";
import Conversation from "../../components/conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

const Dashboard = () => {

    const open = useSelector((state: any) => state.app.contact.open);

    return (
        <Stack direction="row" maxWidth="100vw" height="100vh" maxHeight="100vh">
            <Sidebar />
            <Chats />
            <Conversation />

            {
                open && <Contact />
            }
            
        </Stack>
    );
}

export default Dashboard;