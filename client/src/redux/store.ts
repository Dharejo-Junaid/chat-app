import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebar";
import snackbarReducer from "./slices/snackbar";
import appReducer from "./slices/app";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        snackbar: snackbarReducer,
        app: appReducer
    }
});

export default store;