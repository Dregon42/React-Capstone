import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        messages: [], 
    },
    reducers: {
        chooseMessages: (state, action) => { state.messages = action.payload },
        addMessage: (state,action) => {state.messages.push(action.payload)} // messages submitted on RSVP form will be added to messages list in store
    },
});

export const { chooseMessages, addMessage } = postSlice.actions;

