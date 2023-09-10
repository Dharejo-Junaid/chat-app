import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { TimeLine, MediaMessage, DocumentMessage, ReplyMessage, TextMessage } from "../../message_types";

const Messages = () => {

    const { currentChatMessages } = useSelector((state) => state.conversation.chats);

    return (
        <Stack
            maxWidth="100%"
            flexGrow={1}
            sx={{ 
                backgroundColor: "F0F4FA",
                overflowY: "hidden"
            }}
        >
            <Stack
                flexGrow={1}
                height="100%"
                spacing={2.5}
                padding={2}
                sx={{
                    backgroundColor: "#F0F4FA",
                    overflowY: "scroll",
                    minHeight: "95%",
                    flexGrow: "1"
                }}>
                {
                    currentChatMessages.map( (el) => {
                        switch (el.type) {
                            case "divider":
                                return <TimeLine key={el._id} {...el}/>;

                            case "msg":
                                switch (el.subtype) {
                                    case "img": 
                                        return <MediaMessage key={el._d} {...el}/>
                                    
                                    case "doc":
                                        return <DocumentMessage key={el._d} {...el}/>

                                    case "reply":
                                        return <ReplyMessage key={el._d} {...el}/>

                                    default:
                                        return <TextMessage key={el._d} {...el} />
                                }
                            
                            default: return <></>;
                        }
                    })
                }
            </Stack>
        </Stack>
    );
}

export default Messages;