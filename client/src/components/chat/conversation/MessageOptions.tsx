import { Menu, MenuItem, Stack } from "@mui/material";
import { DotsThreeVertical } from "@phosphor-icons/react";
import { useState } from "react";


const messageOptions = [ 
    { title: "Reply" },
    { title: "React to message" },
    { title: "Forword message" },
    { title: "Star message" },
    { title: "Report" },
    { title: "Delete message" }
];

const MessageOptions = () => {

    const [ anchorEl, setAnchorEl ] = useState<any>(null);
    const open = Boolean(anchorEl);
    
    const handleOpen = (event: any) => {
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
                        messageOptions.map((messageOption: any, idx: number) => {
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