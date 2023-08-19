import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT"
    }
}

const reducers = {
    toggleSidebar: (state: typeof initialState) => {
        state.sidebar.open = !state.sidebar.open;        
    },

    updateSidebarToContact: (state: typeof initialState) => {
        state.sidebar.type = "CONTACT";
    },

    updateSidebarToSharredMessage: (state: typeof initialState) => {
        state.sidebar.type = "SHARRED_MESSAGES";
    },

    updateSidebarToStarredMessages: (state: typeof initialState) => {
        state.sidebar.type = "STARRED_MESSAGES";
    }
}

const slice = createSlice({
    name: "sidebar",
    initialState,
    reducers
});

export default slice.reducer;
const { actions } = slice;
export const {
    toggleSidebar,
    updateSidebarToContact,
    updateSidebarToSharredMessage,
    updateSidebarToStarredMessages
} = actions;