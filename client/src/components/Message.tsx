import { Stack } from "@mui/material"

import { Chat_History } from "../contents/data"
import DocumentMessage from "./messageTypes/DocumentMessage";
import MediaMessage from "./messageTypes/MediaMessage";
import ReplyMessage from "./messageTypes/ReplyMessage";
import TextMessage from "./messageTypes/TextMessage";
import TimeLine from "./messageTypes/TimeLine";

const Message = () => {

    return <Stack spacing={3} p={1.5} sx={{ backgroundColor: "#F0F4FA" }}>
        {
            Chat_History.map( (el) => {
                switch (el.type) {
                    case "divider":
                        return <TimeLine {...el}/>;

                    case "msg":
                        switch (el.subtype) {
                            case "img": 
                                return <MediaMessage {...el}/>
                            
                            case "doc":
                                return <DocumentMessage {...el}/>

                            case "reply":
                                return <ReplyMessage {...el}/>

                            default:
                                return <TextMessage {...el} />
                        }
                    
                    default: return <></>;
                }
            })
        }
    </Stack>
}

export default Message;