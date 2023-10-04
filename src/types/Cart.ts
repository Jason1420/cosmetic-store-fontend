import { CartItem } from "./CartItem";

export interface Cart {
    totalQuantity: number,
    totalPrice: number,
    items: CartItem[]
}