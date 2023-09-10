import { Stack, Badge, Avatar, Typography } from "@mui/material";
import { selectChat } from "../redux/slices/app";
import { useDispatch } from "react-redux";
import { socket } from "../socket";
import { updateCurrentChat, updateCurrentChatMessages } from "../redux/slices/conversation";

const ChatElement = ( { _id, roomId, img, name, time, unread, online, email }) => {

    const dispatch = useDispatch();

    const getMessages = (conversationId) => {
        socket.emit("get_messages", { conversationId }, async (data) => {
            dispatch(updateCurrentChatMessages(data.messages));
        });
    }
    
    return (
        <Stack
            onClick={() => {
                dispatch(selectChat(roomId));
                dispatch(updateCurrentChat({ _id, name, img, online, email }));

                getMessages(roomId);
            }}
            direction="row"
            justifyContent="space-between"
            padding={1.5}
            borderRadius={1.5}
            sx={{
                backgroundColor: "#fff",
                alignItems: "center",
                ":hover": {
                    cursor: "pointer"
                }
            }}
        >
            
            <Stack direction="row" alignItems="center">
                    <Avatar src={img} alt={name}/>

                <Stack marginLeft={2.5}>
                    <Typography>{name}</Typography>
                    {/* <Typography variant="caption">{email}</Typography> */}
                </Stack>
            </Stack>

            <Stack alignItems="center" spacing={1.5}>
                <Typography variant="caption">{time}</Typography>
                <Badge color="success" badgeContent={unread}/>
            </Stack>
        </Stack>
    );
}

export default ChatElement;