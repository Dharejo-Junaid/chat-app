import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
    message: "default",
    severity: "success",
}

const reducers = {
    setOpen: (state, action) => {
        state.open = action.payload.open;
    },

    showMessage: (state, action) => {
        state.message = action.payload.message;
        state.severity = action.payload.severity;
        state.open = true;        
    },
}

const slice = createSlice({
    name: "snackbar",
    initialState,
    reducers
});

export default slice.reducer;
export const { setOpen, showMessage } = slice.actions;