import { Stack } from "@mui/system";
import Chats from "../../components/chats/Chats";
import Sidebar from "../../components/Sidebar";
import Conversation from "../../components/conversation";

const Dashboard = () => {

    return (
        <Stack direction="row" maxWidth="100vw" height="100vh" maxHeight="100vh">
            <Sidebar />
            <Chats />
            <Conversation />
        </Stack>
    );
}

export default Dashboard;