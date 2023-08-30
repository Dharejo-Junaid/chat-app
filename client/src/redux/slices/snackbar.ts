import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
    message: "",
    type: ""
}

const reducers = {
    setOpen: (state: any, action: any) => {
        state.open = action.payload.open;
    },

    showMessage: (state: any, action: any) => {
        state.message = action.payload.message;
        state.type = action.payload.type;
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