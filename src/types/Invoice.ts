import { Cart } from "./Cart";

export interface Invoice {
    cartItem: Cart,
    code?: string,
    customerName: string,
    customerEmail: string,
    customerPhoneNumber: string,
    customerAddress: string,
    customerUsername?: string | null,
    invoiceStatus: boolean // false - pending, true - created
}