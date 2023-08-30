import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/app";
import snackbarReducer from "./slices/snackbar";

const store = configureStore({
    reducer: {
        app: sidebarReducer,
        snackbar: snackbarReducer
    }
});

export default store;