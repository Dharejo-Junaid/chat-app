import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const _id = window.localStorage.getItem("_id");

const initialState = {
  chatType: "inidividual",
  chatId: 0,

  chats: {
    allChats: [],
    currentUser: {},
    currentChat: [],
  },

  groupChat: {},
};

const reducers = {
  updateChatId: (state, action) => {
    state.chatId = action.payload;
  },

  updateAllChats: (state, action) => {
    state.chats.allChats = action.payload.map((el) => {
      const user = el.participients[0];
      // user => _id username avatar status email;
      return {
        ...user,
        avatar: faker.image.avatar(),
        unread: 2,
        chatId: el._id,
      };
    });
  },

  updateCurrentUser: (state, action) => {
    state.chats.currentUser = action.payload;
  },

  updateCurrentChat: (state, action) => {
    const data = action.payload;
    console.log("\n\nupdate ucrrent chat = ", { ...data }, "\n\n");
    // msg => _id, from, to, type, (text | media | document), time;
    state.chats.currentChat = action.payload.map((msg) => {
      return {
        ...msg,
        incoming: msg.to === _id,
      };
    });
  },
};

const slice = createSlice({
  name: "conversation",
  initialState,
  reducers,
});

export default slice.reducer;
export const {
  updateChatId,
  updateAllChats,
  updateCurrentChat,
  updateCurrentUser,
} = slice.actions;
