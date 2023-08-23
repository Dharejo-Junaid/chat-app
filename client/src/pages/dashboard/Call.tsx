import { Stack } from "@mui/material";
import CallsList from "../../components/call/CallsList";

const Call = () => {
    return (
        <Stack direction="row" flexGrow={1} height="100vh">
            <CallsList />
            {/* TODO => reuse conversation components */}
        </Stack>
    );
}

export default Call;