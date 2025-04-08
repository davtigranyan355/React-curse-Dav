import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducers } from "./slice/productSlice";
import { usersReducers } from "./slice/usersSlice";

export const store = configureStore({
    reducer: combineReducers({
        products: productsReducers,
        users: usersReducers
    })

});

