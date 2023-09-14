import { Stack, Typography } from "@mui/material";
export const TextMessage = ({ incoming, text, time }) => {
  return (
    <Stack direction="row" justifyContent={incoming ? "left" : "right"}>
      <Stack>
        <Typography
          variant="body2"
          p={1}
          borderRadius={1.5}
          sx={{
            backgroundColor: incoming ? "#FFFFFF" : "#5B96F7",
          }}
        >
          {text}
        </Typography>
        <Typography variant="caption" alignSelf="end">{time}</Typography>
      </Stack>
    </Stack>
  );
};

export default TextMessage;
