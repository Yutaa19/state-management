import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    cartitems: [],

}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialstate,
    reducers: {
        addItemToCart: () => {
            consolo.log("redux/toolkit")
        }
    }
})

export const { addItemToCart } = cartSlice.actions

export default cartSlice