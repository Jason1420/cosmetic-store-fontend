import { createAction, createReducer } from '@reduxjs/toolkit'
import { CartItem } from '../../types/CartItem'
import { Cart } from '../../types/Cart'

const initialState: Cart = {
    totalPrice: 0,
    totalQuantity: 0,
    items: []
}


export const addNewItemToCart = createAction<CartItem>('ADD_ITEM_TO_CART')
export const decreaseItemFromCart = createAction<CartItem>('DECREASE_ITEM_FROM_CART')
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
        })
        .addCase(decreaseItemFromCart, (state, action) => {
            let newQuantity = state.totalQuantity - 1;
            state.totalQuantity = newQuantity;
            let newPrice = state.totalPrice - action.payload.item.price;
            state.totalPrice = newPrice;

            let existItem = state.items.find(item => item.item.id === action.payload.item.id);

            if (existItem && existItem.quantity > 1) {
                existItem.quantity -= 1;
            } else if (existItem && existItem.quantity === 1) {
                state.items.splice(state.items.findIndex(v => v.item.id === action.payload.item.id), 1);
            }
        });
})

