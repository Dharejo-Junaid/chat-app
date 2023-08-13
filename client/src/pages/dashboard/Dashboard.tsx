import { Stack } from "@mui/system";
import Chats from "../../components/Chats";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {

    return (
        <Stack direction="row">
            <Sidebar />
            <Chats />
        </Stack>
    );
}

export default Dashboard;