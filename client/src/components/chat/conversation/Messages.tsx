import { Stack } from "@mui/material";
import Message from "../Message";

const Messages = () => {
    return (
        <Stack 
            flexGrow={1}
            maxWidth="100%" 
            sx={{ 
                backgroundColor: "F0F4FA",
                overflowY: "scroll" 
            }}
        >
            <Message />
        </Stack>
    );
}

export default Messages;