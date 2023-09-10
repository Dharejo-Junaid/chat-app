import { Menu, MenuItem, Stack } from "@mui/material";
import { DotsThreeVertical } from "@phosphor-icons/react";
import { useState } from "react";


const messageOptions = [ 
    { title: "Reply" },
    { title: "Forword message" },
    { title: "Star message" },
    { title: "Delete message" }
];

const MessageOptions = () => {

    const [ anchorEl, setAnchorEl ] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <>
            <DotsThreeVertical size={20} onClick={handleOpen}/>
            <Stack>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    sx={{ p: "16px" }}
                >
                    {
                        messageOptions.map((messageOption, idx) => {
                            return (
                                <MenuItem key={idx} onClick={handleClose}>
                                    {messageOption.title}
                                </MenuItem>
                            );
                        })
                    }
                </Menu>
            </Stack>
        </>
    );
}

export default MessageOptions;