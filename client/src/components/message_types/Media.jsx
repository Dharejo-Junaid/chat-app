import { Stack, Typography, useTheme } from "@mui/material";

const MediaMessage = ({ message, img, incoming }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={incoming ? "left" : "right"}>
      <Stack
        spacing={1.5}
        borderRadius={1.5}
        p={1}
        sx={{
          backgroundColor: incoming
            ? "#FFFFFF"
            : theme.palette.background.paper,
        }}
      >
        <img src={img} style={{ maxHeight: "200px", borderRadius: "12px" }} />

        <Typography variant="body2">{message}</Typography>
      </Stack>
    </Stack>
  );
};

export default MediaMessage;