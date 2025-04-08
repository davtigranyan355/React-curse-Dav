
import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
    },
    reducers: {
        addProducts(state, products) {
            state.products = products.payload;
        }
    },
});

export const productsReducers = productSlice.reducer;
export const productsAcrions = productSlice.actions;
