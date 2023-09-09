import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

const _id = window.localStorage.getItem("_id");

const initialState = {
    oneToOneChat: {
        conversations: [],
        currentConveration: {},
        currectMessages: []
    },

    groupChat: {}
}

const reducers = {
    updateOneToOneConversations: (state: typeof initialState, action: any) => {
        
        const list = action.payload.map((el: any) => {
            const user = el.participients.find((elm: any) => elm._id.toString() !== _id);
            console.log(user);
            
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
        
        state.oneToOneChat.conversations = list;
    },
    
    updateOneToOneCurrentMessages: (state: typeof initialState, action: any) => {
        state.oneToOneChat.currectMessages = action.payload;
    },

    updateOneToOneCurrentConversation: (state: typeof initialState, action: any) => {
        console.log("updateOneToOneCurrentConversation = ", action.payload);
        
        state.oneToOneChat.currentConveration = action.payload;
    }
};

const slice = createSlice({
    name: "conversation",
    initialState,
    reducers
});

export default slice.reducer;
export const {
    updateOneToOneConversations,
    updateOneToOneCurrentMessages,
    updateOneToOneCurrentConversation
} = slice.actions;