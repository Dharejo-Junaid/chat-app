import { Stack, Typography } from "@mui/material";
import MessageOptions from "../MessageOptions";

const ReplyMessage = ({ reply, message, incoming }: any) => {
    return (
        <Stack 
            direction="row"
            justifyContent={incoming? "left" : "right"}
        >

            <Stack 
                spacing={1.5}
                borderRadius={1.5}
                p={1}
                sx={{ 
                    backgroundColor: incoming
                    ? "#FFFFFF"
                    : "#5B96F7"
                }}
            >
                <Stack
                    borderRadius={1.5}
                    p={1}
                    sx={{ 
                        backgroundColor: "white" 
                    }}
                >
                    <Typography 
                        variant="caption" 
                        overflow="hidden" 
                    >
                        {message}
                    </Typography>
                </Stack>

                <Typography variant="body2">
                    {reply}
                </Typography>
            </Stack>
            <MessageOptions />
        </Stack>
    );
}

export default ReplyMessage;