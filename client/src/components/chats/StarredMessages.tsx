import { Box, Stack, IconButton, Typography } from "@mui/material";
import { ArrowLeft } from "@phosphor-icons/react";
import { useDispatch } from "react-redux";
import { updateSidebarToContact } from "../../redux/slices/app";

const StarredMessages = () => {
    const dispatch = useDispatch();

    return (
        <Box
            minWidth="300px"
            maxWidth="3000px"
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
                <IconButton onClick={ () => dispatch(updateSidebarToContact()) }>
                    <ArrowLeft color="#4B4B4B"/>
                </IconButton>
                <Typography variant="subtitle1">Starred Messages</Typography>
            </Stack>

            <Stack p={2} spacing={1.5} flexGrow={1} sx={{ overflowY: "scroll" }}>
                <Typography>Stared messages will be rendered after getting data from API</Typography>
            </Stack>
        </Box>
    );
}



export default StarredMessages;