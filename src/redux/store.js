import { configureStore } from "@reduxjs/toolkit";
import { rsvpSlice } from "./silces/RootSlice";
import { postSlice } from "./silces/MessageSlice";

export const store = configureStore({
   reducer: {
      post: postSlice.reducer,
      rsvp: rsvpSlice.reducer,
   },
   devTools: true, 
}) ;