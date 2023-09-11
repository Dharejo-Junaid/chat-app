import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/app";
import conversationReducer from "./slices/conversation";

const store = configureStore({
  reducer: {
    app: appReducer,
    conversation: conversationReducer,
  }
});

export default store;