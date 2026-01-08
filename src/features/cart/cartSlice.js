import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    cartitems: [],

}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialstate,
    reducers: {
        addItemToCart: (state, action) => {
            const newTime = action.payload
            state.cartitems.push(newTime)
        }
    }
})

export const { addItemToCart } = cartSlice.actions

export default cartSlice