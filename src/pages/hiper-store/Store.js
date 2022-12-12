import { configureStore } from "@reduxjs/toolkit";
import caracterReducer from './caracterSlice';

export const store = configureStore({
    reducer: caracterReducer,
})