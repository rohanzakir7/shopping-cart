import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
// import { useEffect } from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: []
  },
  reducers: {
    addtoCart: (state, action) => {
      state.cart.push(action.payload);
    }
  },
});

export const { addtoCart } = cartSlice.actions;



export default cartSlice.reducer;
