import { createAction, createReducer } from '@reduxjs/toolkit'
import { Customer } from '../../types/Customer'

export interface UserLogin {
    accessToken: string,
    userDTO: {
        id: number | null,
        username: string,
        roles: string[],

    }
    customer: Customer,
    logged: boolean

}

const initialState: UserLogin = {
    accessToken: "",
    userDTO: {
        id: null,
        username: "",
        roles: [""],

    },
    customer: {
        name: "",
        email: "",
        address: "",
        phoneNumber: ""
    },
    logged: false
}

export const isLogged = createAction<UserLogin>('LOGGED')
export const refreshed = createAction<UserLogin>('REFRESHED')
export const isLogout = createAction('LOGOUT')
export const authReducer = createReducer(initialState, builder => {
    builder
        .addCase(isLogged, (state, action) => {
            let copyState = state;
            copyState = {
                ...copyState,
                accessToken: action.payload.accessToken,
                userDTO: action.payload.userDTO,
                logged: true,
                customer: action.payload.customer
            }
            return { ...state, ...copyState }
        })
        .addCase(refreshed, (state, action) => {
            let copyState = state;
            copyState = { ...copyState, accessToken: action.payload.accessToken }
            return { ...state, ...copyState }
        })
        .addCase(isLogout, (state) => {
            return { ...initialState }
        })
})

