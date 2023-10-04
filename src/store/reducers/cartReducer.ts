import { createAction, createReducer } from '@reduxjs/toolkit'
import { CartItem } from '../../types/CartItem'
import { Cart } from '../../types/Cart'



const initialState: Cart = {
    totalPrice: 0,
    totalQuantity: 0,
    items: []
}


export const addNewItemToCart = createAction<CartItem>('ADD_ITEM_TO_CART')

export const cartReducer = createReducer(initialState, builder => {
    builder
        .addCase(addNewItemToCart, (state, action) => {
            let newQuantity = state.totalQuantity + 1;
            state.totalQuantity = newQuantity;
            let newPrice = state.totalPrice + action.payload.item.price;
            state.totalPrice = newPrice;

            let existItem = state.items.find(item => item.item.id === action.payload.item.id);

            if (existItem) {
                existItem.quantity += 1;
            } else {
                state.items.push(action.payload);
            }
        });
})

