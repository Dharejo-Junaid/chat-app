import { faker } from "@faker-js/faker";
import { Avatar, Box, Button, Divider, IconButton, Stack, Switch, Typography } from "@mui/material";
import { Bell, CaretRight, FlagBanner, Phone, Star, Trash, VideoCamera, XCircle } from "@phosphor-icons/react";

const Contact = () => {
    return (
        <Box
            minWidth="300px"
            maxWidth="3000px"
            height="100vh"
        >

            <Stack
                direction="row"
                alignItems="center"
                height="60px"
                spacing={1.5}
                paddingLeft={2.5}
                paddingRight={2.5}
                boxShadow="0 0 2px rgba(0, 0, 0, 0.25)"
                sx={{ backgroundColor: "#F8FAFF" }}
            >
                <IconButton> <XCircle color="#4B4B4B"/> </IconButton>
                <Typography variant="subtitle1">Contact info</Typography>
            </Stack>

            <Stack p={2} spacing={1.5}>

                <Stack direction="row" alignItems="center" spacing={1.5} p={1}>
                    <Avatar
                        src={faker.image.avatar()}
                        alt={faker.name.firstName()}
                        sx={{
                            width: "60px",
                            height: "60px"
                        }}
                    />
                    <Stack spacing={0.25}>
                        <Typography variant="subtitle1">Junaid Ali</Typography>
                        <Typography variant="caption">+923093878422</Typography>
                    </Stack>
                </Stack>

                <Stack direction="row" justifyContent="center" alignItems="center" spacing={5}>
                    <IconButton sx={{color: "black", width: "60px", height: "60px"}}>
                        <Stack alignItems="center" spacing={0.25}>
                            <VideoCamera />
                            <Typography variant="caption">Video</Typography>
                        </Stack>
                    </IconButton>
                    <IconButton sx={{color: "black", width: "60px", height: "60px"}}>
                        <Stack alignItems="center" spacing={0.25}>
                            <Phone />
                            <Typography variant="caption">Audio</Typography>
                        </Stack>
                    </IconButton>
                </Stack>
                
                <Divider />

                <Stack>
                    <Typography variant="subtitle1">About</Typography>
                    <Typography variant="caption">I am using pied piper</Typography>
                </Stack>

                <Divider />

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="caption">Media, links and docs</Typography>
                    <Button size="small" endIcon={<CaretRight />}>
                        401
                    </Button>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={2} maxWidth="250px">
                    {
                        [1, 2, 3].map(() => {
                            return (
                                <img style={{ width: "32%", height: "32%" }} src={faker.image.city()} alt="Image" />
                                
                            );
                        })
                    }
                </Stack>

                <Divider />

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={2}>
                        <Star size={20}/>
                        <Typography variant="caption">Starred Messages</Typography>
                    </Stack>
                    <IconButton size="small">
                        <CaretRight color="black"/>
                    </IconButton>
                </Stack>

                <Divider />

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={2}>
                        <Bell size={20}/>
                        <Typography variant="caption">Mute Notifications</Typography>
                    </Stack>
                    <Switch />
                </Stack>

                <Divider />

                <Stack>
                    <Typography variant="caption">1 group in common</Typography>
                    <Stack direction="row" alignItems="center" spacing={1.5} p={2}>
                        <Avatar
                            src={faker.image.avatar()}
                            alt={faker.name.firstName()}
                            sx={{
                                width: "40px",
                                height: "40px"
                            }}
                        />
                        <Stack spacing={0.25}>
                            <Typography variant="subtitle2">Pied Piper gang</Typography>
                            <Typography variant="caption">Bilal, Muzamil and you</Typography>
                        </Stack>
                    </Stack>

                    <Stack direction="row" spacing={3} paddingTop={2} justifyContent="center">
                        <Button variant="outlined" startIcon={<FlagBanner />}>Block</Button>
                        <Button variant="outlined" startIcon={<Trash />}>Delete</Button>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Contact;