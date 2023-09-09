import { Stack } from "@mui/material";
import GroupsList from "../../components/group/GroupsList";
import RightCover from "../../components/RightCover";

const Groups = () => {
    return (
        <Stack direction="row" flexGrow={1} height="100vh">
            <GroupsList />
            {/* TODO => reuse conversation components */}

            <RightCover />
                 
        </Stack>
    );
}

export default Groups;