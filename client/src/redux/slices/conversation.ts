import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";
import { socket } from "../../socket";

const _id = window.localStorage.getItem("_id");

const initialState = {
    chats: {
        allChats: [],
        currentChat: {},
        currentChatMessages: []
    },

    groupChat: {}
}

const reducers = {
    updateAllChats: (state: typeof initialState, action: any) => {
        
        const list = action.payload.map((el: any) => {
            const user = el.participients.find((elm: any) => elm._id.toString() !== _id);
            
            return({
                _id: user._id,
                name: user.username,
                email: user.email,
                online: user.status === "online",
                img: faker.image.avatar(),
                msg: "Last message",
                time: "12 : 12",
                unread: 2,
                roomId: el._id
            });
        });
        
        state.chats.allChats = list;
    },
    
    updateCurrentChatMessages: (state: typeof initialState, action: any) => {
        const messages = action.payload.map((msg: any) => {

            return ({
                _id: msg._id,
                message: msg.text,
                incoming: msg.to === _id,
                type: "msg",
                subtype: msg.type
            });
        });
        state.chats.currentChatMessages = messages;
    },

    updateCurrentChat: (state: typeof initialState, action: any) => {
        state.chats.currentChat = action.payload;
    }
};

const slice = createSlice({
    name: "conversation",
    initialState,
    reducers
});

export default slice.reducer;
export const {
    updateAllChats,
    updateCurrentChat,
    updateCurrentChatMessages
} = slice.actions;