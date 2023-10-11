import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cartReducer';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducer } from './reducers/authReducer';
const persistConfig = {
    key: 'root',
    version: 5,
    storage,

}


const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export let persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatcher = typeof store.dispatch;