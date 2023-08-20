import { faker } from "@faker-js/faker";
import { Stack, Badge, Avatar, Typography } from "@mui/material";

const ChatElement = ( { id, img, name, msg, time, unread, online }: any) => {

    return (
        <Stack
            key={id}
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
                    <Avatar src={faker.image.avatar()} alt={name}/>

                <Stack marginLeft={2.5}>
                    <Typography>{name}</Typography>
                    <Typography variant="caption" overflow="hidden">{msg}</Typography>
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