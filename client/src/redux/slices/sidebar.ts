import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
    type: "CONTACT"
}

const reducers = {
    toggleSidebar: (state: typeof initialState) => {
        state.open = !state.open;        
    },

    changeType: (state: typeof initialState, action: any) => {
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