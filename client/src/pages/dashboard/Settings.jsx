import { Stack } from "@mui/material";
import SettingsList from "../../components/settings/SettingsList";
import SettingsCover from "../../components/RightCover";

const Settings = () => {
    return (
        <Stack direction="row" width="100%">
            <SettingsList />
            <SettingsCover />
        </Stack>
    );
}

export default Settings;