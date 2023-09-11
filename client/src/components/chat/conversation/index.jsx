import { Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Messages from "./Messages";

const Conversation = () => {
  return (
    <Stack flexGrow={1} height="100%">
      <Header />
      <Messages />
      <Footer />
    </Stack>
  );
};

export default Conversation;
