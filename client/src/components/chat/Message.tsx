import { Stack } from "@mui/material"

import { TimeLine, MediaMessage, DocumentMessage, ReplyMessage, TextMessage } from "../message_types"
import { useSelector } from "react-redux";

const Message = () => {

    const currectMessages = useSelector((state: any) => state.conversation.oneToOneChat.currectMessages
    );

    return <Stack spacing={3} p={1.5} sx={{ backgroundColor: "#F0F4FA" }}>
        {
            currectMessages.map( (el: any) => {
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
}

export default Message;