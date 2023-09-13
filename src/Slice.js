import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchdata = createAsyncThunk('data', async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data
})

export const Shopping = createSlice({
    name: "shoppingcart",
    initialState: {
        products: [],
        isLoading: false,
        isError: false
    },
    reducers: {
        fetchProducts: (state) => { }
    },
    extraReducers: {
        [fetchdata.pending]: (state) => {
            state.isLoading = true
        },
        [fetchdata.fulfilled]: (state, action) => {
            state.isLoading = false
            state.products = action.payload
        },
        [fetchdata.rejected]: (state) => {
            state.isError = true
        }
    }
})

export const { fetchProducts } = Shopping.actions
export default Shopping.reducer

