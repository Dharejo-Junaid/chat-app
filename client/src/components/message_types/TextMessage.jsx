import { Stack, Typography } from "@mui/material";
import MessageOptions from "../chat/conversation/MessageOptions";

export const TextMessage = ({ incoming, message }) => {

    console.log("Text message = ", { incoming, message });
    
    return (
        <Stack 
            direction="row"
            justifyContent={incoming? "left" : "right"}
        >
            <Typography 
                variant="body2" 
                p={1} 
                borderRadius={1.5}
                sx={{ 
                    backgroundColor: incoming
                    ? "#FFFFFF"
                    : "#5B96F7"
                }}
            >
                {message}
            </Typography>
            <MessageOptions />
        </Stack>
    );
}

export default TextMessage;