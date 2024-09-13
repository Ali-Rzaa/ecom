import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./reducers/RootReducer";

const Store = configureStore({
    reducer: RootReducer});

export default Store;