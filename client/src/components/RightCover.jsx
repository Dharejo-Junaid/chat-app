import { Stack } from "@mui/material";
import Settings from "../assets/settings.svg";

const SettingsCover = () => {
  return (
    <Stack
      flexGrow={1}
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <img src={Settings} alt="Settings" />
    </Stack>
  );
};

export default SettingsCover;
