import { faker } from "@faker-js/faker";
import { Stack, Avatar, Typography, IconButton } from "@mui/material";
import { ArrowDownLeft, ArrowUpRight, Phone } from "@phosphor-icons/react";

const CallElement = ({id, img, name, missed, incomming }: any) => {

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
                    <Stack direction="row" spacing={2} alignItems="center">
                        {
                            incomming
                            ? <ArrowDownLeft color={
                                missed? "red" : "green"
                            }/>
                            : <ArrowUpRight color={
                                missed? "red" : "green"
                            }/>
                        }
                        <Typography variant="caption" overflow="hidden">
                            Yesterday 21:24
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <IconButton>
                <Phone color="green"/>
            </IconButton>
            {/* <Stack alignItems="center" spacing={1.5}>
                <Typography variant="caption">{time}</Typography>
                <Badge color="success" badgeContent={unread}/>
            </Stack> */}
        </Stack>
    );
}

export default CallElement;