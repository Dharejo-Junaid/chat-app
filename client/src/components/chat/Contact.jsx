import { faker } from "@faker-js/faker";
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Stack, Switch, Typography } from "@mui/material";
import { Bell, CaretRight, FlagBanner, Phone, Star, Trash, VideoCamera, XCircle } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, changeType } from "../../redux/slices/sidebar";
import { useState } from "react";

const Contact = () => {

    const dispatch = useDispatch();

    const [ openBlockDialog, setOpenBlockDialog ] = useState(false);
    const [ openDeleteDialog, setOpenDeleteDialog ] = useState(false);

    const currentChat = useSelector((state) => state.conversation.chats.currentChat);

    const handleBlockClose = () => {
        setOpenBlockDialog(false);
    }

    const handleDeleteClose = () => {
        setOpenDeleteDialog(false);
    }

    return (
        <Box
            minWidth="300px"
            maxWidth="300px"
            height="100vh"
            display="flex"
            flexDirection="column"
        >

            <Stack
                direction="row"
                alignItems="center"
                minHeight="60px"
                maxHeight="60px"
                spacing={1.5}
                paddingLeft={2.5}
                paddingRight={2.5}
                boxShadow="0 0 2px rgba(0, 0, 0, 0.25)"
                sx={{ backgroundColor: "#F8FAFF" }}
            >
                <IconButton onClick={ () => dispatch(toggleSidebar()) }>
                    <XCircle color="#4B4B4B"/>
                </IconButton>
                <Typography variant="subtitle1">Contact info</Typography>
            </Stack>

            <Stack p={2} spacing={1.5} flexGrow={1} sx={{ overflowY: "scroll" }}>

                <Stack alignItems="center" spacing={1.5} p={1}>
                    <Avatar
                        src={currentChat.img}
                        alt={currentChat.name}
                        sx={{
                            width: "60px",
                            height: "60px"
                        }}
                    />
                    <Stack spacing={0.25} alignItems="center">
                        <Typography variant="subtitle1">{currentChat.name}</Typography>
                        <Typography variant="caption">{currentChat.email}</Typography>
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
                    <Button
                        size="small"
                        endIcon={<CaretRight />}
                        onClick={() => dispatch(changeType("SHARRED_MESSAGES"))}
                    >
                        401
                    </Button>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={2} maxWidth="250px">
                    {
                        [1, 2, 3].map((_el, idx) => {
                            return (
                                <img key={idx} style={{ width: "32%", height: "32%" }} src={faker.image.city()} alt="Image" />
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
                    <IconButton size="small" onClick={() => dispatch(changeType("STARRED_MESSAGES"))}>
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
                            alt={faker.person.firstName()}
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
                        <Button
                            variant="outlined"
                            startIcon={<FlagBanner />}
                            onClick={() => setOpenBlockDialog(true)}
                        >
                            Block
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<Trash />}
                            onClick={() => setOpenDeleteDialog(true)}
                        >
                            Delete
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
            
            { openBlockDialog && <BlockDialog open={openBlockDialog} onClose={handleBlockClose}/> }
            { openDeleteDialog && <DeleteDialog open={openDeleteDialog} onClose={handleDeleteClose}/> }
        </Box>
    );
}

const BlockDialog = ({ open, onClose }) => {

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                Block this contact?
            </DialogTitle>

            <DialogContent>
                <DialogContentText>Are you sure you want to block this contact?</DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button autoFocus onClick={onClose}>Block</Button>
            </DialogActions>
        </Dialog>
    );
}

const DeleteDialog = ({ open, onClose }) => {

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                Delete this chat?
            </DialogTitle>

            <DialogContent>
                <DialogContentText>Are you sure you want to delete this chat?</DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button autoFocus onClick={onClose}>Delete</Button>
            </DialogActions>
        </Dialog>
    );
}

export default Contact;