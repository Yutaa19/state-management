import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    cartItems: [],

}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialstate,
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload
            const selectedCartIndex = state.cartItems.findIndex(datas => datas.id === newItem.id)

            if(selectedCartIndex !== -1){
                state.cartItems[selectedCartIndex].quantity += 1
                state.cartItems[selectedCartIndex].totalPrice = state.cartItems[selectedCartIndex].quantity * newItem.price
            } else {
                state.cartItems.push({
                    ...newItem,
                    quantity : 1,
                    totalPrice: newItem.price
                })
            }
        }
    }
})

export const { addItemToCart } = cartSlice.actions

export default cartSlice

export const selectCartItems = state => state.cart.cartItems
export const selectCartTotalItems = state => state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)