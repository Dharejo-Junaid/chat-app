import { faker } from "@faker-js/faker";
import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import { Phone, VideoCamera } from "@phosphor-icons/react";
import React from "react";

const CallDialogElement = ({ id, name, img }) => {
    return (
        <Stack
            key={id}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                ":hover": {
                    cursor: "pointer"
                }
            }}
        >
            <Stack direction="row" alignItems="center" spacing={1.5}>
                <Avatar src={faker.image.avatar()} alt={name} sx={{ width: "35px", height: "35px" }}/>
                <Typography>{name}</Typography>
            </Stack>

            <Stack direction="row" alignItems="center">
                <IconButton><Phone size={20} color="green"/></IconButton>
                <IconButton><VideoCamera size={20} color="green"/></IconButton>
            </Stack>
        </Stack>
    );
}

export default CallDialogElement;