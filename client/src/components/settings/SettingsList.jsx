import { faker } from "@faker-js/faker";
import { Avatar, Divider, IconButton, Stack, Typography } from "@mui/material";
import {
  CaretLeft,
  ClipboardText,
  Key,
  Notification,
  PencilCircle,
  WarningCircle,
  Lock,
  Image,
} from "@phosphor-icons/react";

const settingsList = [
  {
    key: "notifications_setting",
    icon: <Notification size={20} color="black" />,
    title: "Notifications",
  },
  {
    key: "privacy_setting",
    icon: <Lock size={20} color="black" />,
    title: "Privacy",
  },
  {
    key: "security_setting",
    icon: <Key size={20} color="black" />,
    title: "Security",
  },
  {
    key: "theme-setting",
    icon: <PencilCircle size={20} color="black" />,
    title: "Theme",
  },
  {
    key: "chat_wallpaper_setting",
    icon: <Image size={20} color="black" />,
    title: "Chat Wallpaper",
  },
  {
    key: "account_info_setting",
    icon: <ClipboardText size={20} color="black" />,
    title: "Account Info",
  },
  {
    key: "help_setting",
    icon: <WarningCircle size={20} color="black" />,
    title: "Help",
  },
];

const SettingsList = () => {
  return (
    <Stack
      width="270px"
      bgcolor="#F8FAFF"
      boxShadow="0 0 2px rgba(0, 0, 0, 0.25)"
      maxHeight="100%"
    >
      <Stack direction="row" alignItems="center" pt={1.5}>
        <IconButton>
          <CaretLeft color="black" />
        </IconButton>
        <Typography variant="h6">Settings</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1.5} p={3}>
        <Avatar
          src={faker.image.avatar()}
          alt={faker.name.firstName()}
          sx={{
            width: "50px",
            height: "50px",
          }}
        />
        <Stack spacing={0.25}>
          <Typography variant="subtitle1">Junaid Ali</Typography>
          <Typography variant="caption">+923093878422</Typography>
        </Stack>
      </Stack>

      {settingsList.map(({ key, icon, title }) => {
        return (
          <>
            <Stack
              key={key}
              direction="row"
              spacing={2.5}
              p={2}
              paddingTop={2.5}
              paddingBottom={1.5}
              sx={{
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              {icon}
              <Typography variant="body2">{title}</Typography>
            </Stack>
            <Divider />
          </>
        );
      })}
    </Stack>
  );
};

export default SettingsList;
