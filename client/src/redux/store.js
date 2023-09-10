import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebar";
import snackbarReducer from "./slices/snackbar";
import appReducer from "./slices/app";
import conversationReducer from "./slices/conversation";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        snackbar: snackbarReducer,
        app: appReducer,
        conversation: conversationReducer
    }
});

export default store;