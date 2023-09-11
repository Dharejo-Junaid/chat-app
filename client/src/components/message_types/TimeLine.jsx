import { Divider, Stack, Typography } from "@mui/material";

const TimeLine = ({ text }) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Divider sx={{ flexGrow: 1 }} />
      <Typography variant="caption">{text}</Typography>
      <Divider sx={{ flexGrow: 1 }} />
    </Stack>
  );
};

export default TimeLine;