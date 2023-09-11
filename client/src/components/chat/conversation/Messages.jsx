import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { TimeLine, Media, Document, Text } from "../../message_types";

const Messages = () => {
  const { currentChat } = useSelector((state) => state.conversation.chats);

  return (
    <Stack
      maxWidth="100%"
      flexGrow={1}
      sx={{
        backgroundColor: "F0F4FA",
        overflowY: "hidden",
      }}
    >
      <Stack
        flexGrow={1}
        height="100%"
        spacing={2.5}
        padding={2}
        sx={{
          backgroundColor: "#F0F4FA",
          overflowY: "scroll",
          minHeight: "95%",
          flexGrow: "1",
        }}
      >
        {currentChat.map((el) => {
          switch (el.type) {
            case "divider":
              return <TimeLine key={el._id} {...el} />;

            case "media":
              return <Media key={el._id} {...el} />;

            case "document":
              return <Document key={el._id} {...el} />;

            case "text":
              return <Text key={el._id} {...el} />;

            default:
              <></>;
          }
        })}
      </Stack>
    </Stack>
  );
};

export default Messages;
