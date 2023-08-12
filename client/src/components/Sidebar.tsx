import { Avatar, Stack, useTheme, IconButton, Divider, Switch } from "@mui/material";
import logo from "../assets/logo.png";

import ChatIcon from '@mui/icons-material/Chat';
import UsersIcon from '@mui/icons-material/GroupOutlined';
import PhoneIcon from '@mui/icons-material/Phone';

import SettingsIcon from '@mui/icons-material/Settings';
import { faker } from "@faker-js/faker";

const Sidebar = () => {

    const theme = useTheme();
    
    return (
        <Stack spacing={3} sx={{ 
            backgroundColor: theme.palette.background.paper, 
            boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)",
            width: "70px", height: "100vh",
            alignItems: "center"
        }}>
        
            <IconButton>
                <Avatar 
                    variant="rounded" 
                    src={logo} sx={{ width: "60px", height: "60px" }}
                />
            </IconButton>

            <IconButton> <ChatIcon /> </IconButton>
            <IconButton> <UsersIcon /> </IconButton>
            <IconButton> <PhoneIcon /> </IconButton>
            <Divider sx={{ width: "80%" }}/>
            <IconButton> <SettingsIcon /> </IconButton>

            <Stack spacing={3} flex={1} alignItems="center" justifyContent="end" p={4}>
                <Switch onChange={() => { theme.palette.mode = "dark" }}/>
                <Avatar src={faker.image.avatar()}/>
            </Stack>
        </Stack>
    );
}

export default Sidebar;