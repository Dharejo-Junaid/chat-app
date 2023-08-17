import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contact: {
        open: true,
        type: "CONTACT"
    }
}

const reducers = {
    toggleSidebar: (state: typeof initialState) => {
        state.contact.open = !state.contact.open;        
    },

    updateSidebarType: (state: typeof initialState, action: any) => {
        state.contact.type = action.payload.type;
    }
}

const slice = createSlice({
    name: "sidebar",
    initialState,
    reducers
});

export default slice.reducer;
const { actions } = slice;
export const { toggleSidebar } = actions;