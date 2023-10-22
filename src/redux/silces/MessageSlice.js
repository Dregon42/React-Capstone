import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        messages: [], 
    },
    reducers: {
        chooseMessages: (state, action) => { state.messages = action.payload },
        addMessage: (state,action) => {state.messages.push(action.payload)}
    },
});

export const { chooseMessages, addMessage } = postSlice.actions;

