import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
    type: "CONTACT"
}

const reducers = {
    toggleSidebar: (state) => {
        state.open = !state.open;        
    },

    changeType: (state, action) => {
        state.type = action.payload;
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
    changeType
} = actions;