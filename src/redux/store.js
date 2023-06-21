import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducer/CartReducer";
import AuthReducer from "./reducer/AuthReducer";

export const store = configureStore({
    reducer: {
        CartReducer: CartReducer,
        AuthReducer: AuthReducer
    },
});