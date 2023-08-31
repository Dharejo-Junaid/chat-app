import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebar";
import snackbarReducer from "./slices/snackbar";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        snackbar: snackbarReducer
    }
});

export default store;