import { Stack, Typography, IconButton, Divider } from "@mui/material";
import { DownloadSimple, File } from "@phosphor-icons/react";
import MessageOptions from "../chat/conversation/MessageOptions";

const DocumentMessage = ({ message, incoming }: any) => {
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

                <Stack direction="row" spacing={1} alignItems="center">
                    <File width="20px" height="20px"/>
                    <Typography variant="caption">Abstract.png</Typography>
                    <IconButton>
                        <DownloadSimple color="#080707"/>
                    </IconButton>
                </Stack>
                <Divider />
                <Typography variant="body2">
                    {message}
                </Typography>
            </Stack>
            <MessageOptions />
        </Stack>
    );
}

export default DocumentMessage;