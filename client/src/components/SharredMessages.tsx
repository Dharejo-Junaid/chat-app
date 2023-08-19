import { Box, Stack, IconButton, Typography, Tabs, Tab, ImageList, ImageListItem, Paper, Divider } from "@mui/material"
import { ArrowLeft, DownloadSimple, File } from "@phosphor-icons/react"
import { updateSidebarToContact } from "../redux/slices/app"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { faker } from "@faker-js/faker"

const SharredMessages = () => {

    const dispatch = useDispatch();

    const [ selectedTab, setSelectedTab ] = useState(0);
    
    const handleChange = (event: any, value: number) => {
        setSelectedTab(value);
    }

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
                <Typography variant="subtitle1">Sharred Messages</Typography>
            </Stack>

            <Stack sx={{ overflowY: "scroll" }}>
            <Tabs value={selectedTab} onChange={handleChange} centered>
                <Tab label="Media" />
                <Tab label="Links" />
                <Tab label="Docs" />
            </Tabs>

            <Stack p={2} spacing={1.5} flexGrow={1} >
                {
                    selectedTab===0 && <MediaTab />
                }

                {
                    selectedTab===1 && <LinksTab />
                }

                {
                    selectedTab===2 && <DocsTab />
                }
            </Stack>
            </Stack>
        </Box>
    );
}

export default SharredMessages;

const MediaTab = () => {
    return (
        <ImageList cols={3} sx={{ maxWidth: "300px" }}>
            {
                [0, 1, 2, 3, 4, 5, 6].map(() => {
                    return (
                        <ImageListItem>
                            <img src={faker.image.city()} alt="FOOD" />
                        </ImageListItem>
                    );
                })
            }
        </ImageList>
    );
}

import { SHARRED_LINKS } from "../contents/data"

const LinksTab = () => {
    return (
        <>
            {
                SHARRED_LINKS.map(el => {
                    return (
                        <Paper elevation={4} sx={{ p: "10px" }}>
                            <Stack spacing={1}>
                                <Typography
                                    variant="caption"
                                    sx={{ overflow: "hidden" }}
                                >
                                    <a href={el.preview}>
                                        {el.preview}
                                    </a>
                                </Typography>
                                <Divider/>
                                <Typography variant="overline">{el.message}</Typography>
                            </Stack>
                        </Paper>
                    );
                })
            }
        </>
    );
}

import { SHARRED_DOCS } from "../contents/data";

const DocsTab = () => {
    return (
        <>
            {
                SHARRED_DOCS.map(el => {
                    return (
                        <Paper elevation={4} sx={{ p: "10px" }}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Stack direction="row" spacing={2} alignItems="center" >
                                <File size={20}/>
                                <Typography variant="caption">Abstract.png</Typography>
                            </Stack>
                            <IconButton>
                                <DownloadSimple color="#080707"/>
                            </IconButton>
                        </Stack>
                    
                    </Paper>
                    );
                })
            }
        </>
    );
}