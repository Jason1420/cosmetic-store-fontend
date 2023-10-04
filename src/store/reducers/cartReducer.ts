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
            let copyState = state;
            let newQuantity = state.totalQuantity + 1;
            let newPrice = state.totalPrice + action.payload.item.price;


            return {
                ...copyState,
                items: [...copyState.items, action.payload],
                totalQuantity: newQuantity,
                totalPrice: newPrice,
            }


        })

})

