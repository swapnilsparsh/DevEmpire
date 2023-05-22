import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../components/navbar/navbarSlice";


export const store = configureStore({
    reducer: {
        toggle: toggleReducer,
    },
})