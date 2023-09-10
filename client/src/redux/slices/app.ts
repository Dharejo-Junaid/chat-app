import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    users: [],
    friends: [],
    requests: [],

    chatType: "inidividual",
    roomId: 0
}

const reducers = {
    selectChat: (state: typeof initialState, action: any) => {
        state.chatType = "inidividual";
        state.roomId = action.payload;
        console.log("payload = ", action.payload);

    }
};

export const fetchUsers = createAsyncThunk("app/fetchUsers", async () => {
    return axios.get("http://localhost:5000/users/get-users", { withCredentials: true })
    .then(res => res.data.data)
    .catch((err: any) => {
        console.log(err.message);
    });
});

export const fetchFriends = createAsyncThunk("app/fetchFriends", async () => {
    return axios.get("http://localhost:5000/users/get-friends", { withCredentials: true })
    .then(res => res.data.data)
    .catch((err: any) => {
        console.log(err.message);
    });
});

export const fetchRequests = createAsyncThunk("app/fetchRequests", async () => {
    return axios.get("http://localhost:5000/users/get-requests", { withCredentials: true })
    .then(res => res.data.data)
    .catch((err: any) => {
        console.log(err.message);
    });
});

const slice = createSlice({
    name: "app",
    initialState,
    reducers,
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state: typeof initialState, action: any) => {
            state.users = action.payload || [];
        }),

        builder.addCase(fetchFriends.fulfilled, (state: typeof initialState, action: any) => {
            state.friends = action.payload || [];
        }),

        builder.addCase(fetchRequests.fulfilled, (state: typeof initialState, action: any) => {
            state.requests = action.payload || [];
        })
    },
});

export default slice.reducer;
export const { selectChat } = slice.actions;