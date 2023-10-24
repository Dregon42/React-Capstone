import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./silces/MessageSlice";
import { rsvpSlice } from "./silces/RootSlice";

export const store = configureStore({
   reducer: {
      post: postSlice.reducer,
      rsvp: rsvpSlice.reducer,
    },
   devTools: true, 
}) ;