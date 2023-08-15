import { Avatar, Stack, useTheme, IconButton, Divider, Switch, Paper } from "@mui/material";
import logo from "../assets/logo.png";
import { ChatCircleDots, Users, Phone, Gear } from "@phosphor-icons/react";

import { faker } from "@faker-js/faker";

const Sidebar = () => {

    const theme = useTheme();
    
    return (
        <Stack spacing={3} sx={{
            width: "70px", maxHeight: "100%",
            alignItems: "center",
            backgroundColor: "#F0F4FA", 
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)"
        }}>
        
            <Avatar 
                variant="rounded" 
                src={logo} sx={{ width: "60px", height: "60px" }}
            />

            <IconButton> <ChatCircleDots color="#080707"/> </IconButton>
            <IconButton> <Users color="#080707"/> </IconButton>
            <IconButton> <Phone color="#080707"/> </IconButton>
            <Divider sx={{ width: "80%" }}/>
            <IconButton> <Gear color="#080707"/> </IconButton>

            <Stack spacing={3} flex={1} alignItems="center" justifyContent="end" p={4}>
                <Switch onChange={() => { theme.palette.mode = "dark" }}/>
                <Avatar src={faker.image.avatar()}/>
            </Stack>
        </Stack>
    );
}

export default Sidebar;