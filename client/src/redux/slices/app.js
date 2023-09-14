import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

const initialState = {
  contactBar: {
    open: false,
  },

  toast: {
    open: false,
    message: "default",
    severity: "success",
  },

  users: [],
  friends: [],
  requests: [],
};

const reducers = {
  toggleContactBar: (state) => {
    console.log("state.contactBar = ", state.contactBar);
    state.contactBar.open = !state.contactBar.open;
  },

  setOpen: (state, action) => {
    state.toast.open = action.payload;
  },

  showToast: (state, action) => {
    state.toast.message = action.payload.message;
    state.toast.severity = action.payload.severity;
    state.toast.open = true;
  },

  selectChat: (state, action) => {
    state.chatType = "inidividual";
    state.roomId = action.payload;
    console.log("payload = ", action.payload);
  },
};

export const fetchUsers = createAsyncThunk("app/fetchUsers", async () => {
  return axios
    .get("http://localhost:5000/users/get-users", { withCredentials: true })
    .then((res) => res.data.data)
    .catch((err) => {
      console.log(err.message);
    });
});

export const fetchRequests = createAsyncThunk("app/fetchRequests", async () => {
  return axios
    .get("http://localhost:5000/users/get-requests", { withCredentials: true })
    .then((res) => res.data.data)
    .catch((err) => {
      console.log(err.message);
    });
});

const slice = createSlice({
  name: "app",
  initialState,
  reducers,
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload || [];
    }),
      builder.addCase(fetchRequests.fulfilled, (state, action) => {
        state.requests = action.payload || [];
        console.log("requets = ", action.payload[0]);
      });
  },
});

export default slice.reducer;
export const { showToast, selectChat, toggleContactBar, setOpen } =
  slice.actions;
