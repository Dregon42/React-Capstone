import { createSlice } from '@reduxjs/toolkit';
import { addMessage } from './MessageSlice';

export const rsvpSlice = createSlice({
    name: "rsvp",
    initialState: {
      guest_1: "",
      guest_2: "",
      message: "",
    },
    reducers: {
        chooseGuest_1: (state, action) => { state.guest_1 = action.payload },
        chooseGuest_2: (state, action) => { state.guest_2 = action.payload },
        chooseMessage: (state, action) => { state.message = action.payload; addMessage(state.message) }
    }
})


export const { chooseGuest_1, chooseGuest_2, chooseMessage} = rsvpSlice.actions