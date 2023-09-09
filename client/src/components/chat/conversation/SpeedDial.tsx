import { Fab, Stack, Tooltip } from '@mui/material';
import { Camera, File, Image, Sticker, User } from '@phosphor-icons/react';

const actions = [
  { 
    icon: <Image color="#080707" size={23}/>,
    name: 'Image',
    y: 100
  },

  {
    icon: <Sticker color="#080707" size={23}/>,
    name: 'Sticker',
    y: 170
  },

  {
    icon: <Camera color="#080707" size={23}/>,
    name: 'Camera',
    y: 240
  },

  {
    icon: <File color="#080707" size={23}/>,
    name: 'File',
    y: 310
  },

  {
    icon: <User color="#080707" size={23}/>,
    name: "User",
    y: 380
  }
];

function ConversationSpeedDial() {
  return (
    <Stack width="max-content">
      <Stack
        position="relative"
        left="-10px"
      >
        {actions.map(( {icon, name, y}: any, idx: number ) => (
          <Tooltip key={idx} title={name}>
            <Fab sx={{ position: "absolute", top: -y }}>{icon}</Fab>
          </Tooltip>
        ))}
      </Stack>
    </Stack>
  );
}

export default ConversationSpeedDial;