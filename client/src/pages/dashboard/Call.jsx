import { Stack } from "@mui/material";
import CallsList from "../../components/call/CallsList";
import RightCover from "../../components/RightCover";

const Call = () => {
  return (
    <Stack direction="row" flexGrow={1} height="100vh">
      <CallsList />
      {/* TODO => reuse conversation components */}
      <RightCover />
    </Stack>
  );
};

export default Call;
