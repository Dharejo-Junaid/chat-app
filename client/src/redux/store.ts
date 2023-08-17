import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/app";

const store = configureStore({
    reducer: {
        app: sidebarReducer
    }
});

export default store;