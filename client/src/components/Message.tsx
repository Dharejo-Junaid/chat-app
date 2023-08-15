import { Stack } from "@mui/material"

import { Chat_History } from "../contents/data";
import { TimeLine, MediaMessage, DocumentMessage, ReplyMessage, TextMessage } from "./conversation/messageTypes";

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