import { Typography, Stack, IconButton, Dialog, DialogTitle, DialogContent, Tabs, Tab } from "@mui/material";
import Searchbar from "../Searchbar";
import ChatElement from "../ChatElement";
import { CircleDashed, Users } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { fetchUsers, fetchRequests } from "../../redux/slices/app";
import { useDispatch, useSelector } from "react-redux";
import ExploreUserComponent from "./ExploreUsers";
import RequestComponent from "./Requests";

const ExploreTab = () => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.app.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [users]);

    return (
        users.map((user) => <ExploreUserComponent key={user._id} {...user}/>)
    );
}

const RequestsTab = () => {

    const dispatch = useDispatch();
    const requests = useSelector((state) => state.app.requests);

    useEffect(() => {
        dispatch(fetchRequests());
    }, [requests]);

    return (
        requests.map((request) => <RequestComponent key={request._id} {...request}/>)
    );
}

const switchTab = (value) => {
    switch (value) {
        case 0:
            return <ExploreTab />
        case 1:
            return <RequestsTab />
        default:
            <></>;
    }
}

const UserDialog = ({ open, onClose }) => {

    const [ selectedTab, setSelectedTab ] = useState(0);

    const handleChange = (_event, value) => {
        setSelectedTab(value);
    }

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
            <DialogTitle>
                Users
            </DialogTitle>

            <DialogContent>
                <Tabs value={selectedTab} onChange={handleChange} centered>
                    <Tab label="Explore"/>
                    <Tab label="Requests"/>
                </Tabs>

                <Stack mt={2} spacing={1.5}>
                    { switchTab(selectedTab) }
                </Stack>
            </DialogContent>
        </Dialog>
    );
}

const Chats = () => {

    const [ openDialog, setOpenDialog ] = useState(false);
    const allChats = useSelector((state) => state.conversation.chats.allChats);

    const onOpen = () => {
        setOpenDialog(true);
    }

    const onClose = () => {
        setOpenDialog(false);
    }

    return (
        <>
        <Stack 
            p="12px"
            maxHeight="100%"
            minWidth="300px"
            maxWidth="300px"
            sx={{
                backgroundColor: "#F8FAFF",
                overflowY: "scroll"
            }}
        >
            <Stack direction="row" justifyContent="space-between" marginBottom={1}>
                <Typography variant="h6">Chats</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                    <IconButton
                        onClick={onOpen}
                    >
                        <Users size={20} color="#080707"/>
                    </IconButton>
                    <IconButton><CircleDashed size={20} color="#080707"/></IconButton>
                </Stack>
            </Stack>

            <Searchbar />

            <Stack spacing={1} marginTop={2}>
                <Typography variant="caption">All chats</Typography>
                {
                    allChats.map( (el) => {
                        return <ChatElement key={el._id} { ...el } />
                    } )
                }
            </Stack>
        </Stack>

        {openDialog && <UserDialog open={openDialog} onClose={onClose}/>}
        </>
    );
}

export default Chats;