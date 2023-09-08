import { Typography, Stack, IconButton, Dialog, DialogTitle, DialogContent, Tabs, Tab } from "@mui/material";
import Searchbar from "../Searchbar";
import { ChatList } from "../../contents/data";
import ChatElement from "../ChatElement";
import { CircleDashed, Users } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { fetchUsers, fetchFriends, fetchRequests } from "../../redux/slices/app";
import { useDispatch, useSelector } from "react-redux";
import ExploreUserComponent from "./ExploreUserComponent";
import FriendsComponent from "./FriendsComponent";
import RequestComponent from "./RequestComponent";

const FriendsTab = () => {

    const dispatch = useDispatch();
    const friends = useSelector((state: any) => state.app.friends);

    console.log("friends = ", friends);
    

    useEffect(() => {
        dispatch<any>(fetchFriends());
    }, []);

    return (
        friends.map((friend: any) => <FriendsComponent key={friend._id} {...friend}/>)
    );
}

const ExploreTab = () => {

    const dispatch = useDispatch();
    const users = useSelector((state: any) => state.app.users);

    console.log("users = ", users);
    

    useEffect(() => {
        dispatch<any>(fetchUsers());
    }, []);

    return (
        users.map((user: any) => <ExploreUserComponent key={user._id} {...user}/>)
    );
}

const RequestsTab = () => {

    const dispatch = useDispatch();
    const requests = useSelector((state: any) => state.app.requests);

    console.log("requests = ", requests);

    useEffect(() => {
        dispatch<any>(fetchRequests());
    }, []);

    return (
        requests.map((request: any) => <RequestComponent key={request._id} {...request}/>)
    );
}

const switchTab = (value: number) => {
    switch (value) {
        case 0:
            return <FriendsTab />
        case 1:
            return <ExploreTab />
        case 2:
            return <RequestsTab />
        default:
            <></>;
    }
}

const UserDialog = ({ open, onClose }: any) => {

    const [ selectedTab, setSelectedTab ] = useState(0);

    const handleChange = (_event: any, value: number) => {
        setSelectedTab(value);
    }

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
            <DialogTitle>
                Users
            </DialogTitle>

            <DialogContent>
                <Tabs value={selectedTab} onChange={handleChange} centered>
                    <Tab label="Friends"/>
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

const ChatsList = () => {

    const [ openDialog, setOpenDialog ] = useState(false);

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
                    ChatList.map( (el) => {
                        return <ChatElement { ...el } />
                    } )
                }
            </Stack>
        </Stack>

        {openDialog && <UserDialog open={openDialog} onClose={onClose}/>}
        </>
    );
}

export default ChatsList;