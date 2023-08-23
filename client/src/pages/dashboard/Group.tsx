import { Stack } from "@mui/material";
import GroupsList from "../../components/group/GroupsList";

const Groups = () => {
    return (
        <Stack direction="row" flexGrow={1} height="100vh">
            <GroupsList />
            {/* TODO => reuse conversation components */}
        </Stack>
    );
}

export default Groups;