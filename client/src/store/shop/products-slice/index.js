/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



const initialState ={
    isLoading : false,
    productList : []
}

export const fetchAllFilteredProducts = createAsyncThunk('/products/fetchAllProducts', async ({filterParams, sortParams})=>{
    console.log(fetchAllFilteredProducts, "fetchAllFilteredProducts")

    const query = new URLSearchParams({
        ...filterParams,
        sortBy : sortParams
    })

    const result = await axios.get(`http://localhost:5001/api/shop/products/get?${query}`)
    return result?.data;
}


);


 
const shoppingProductSlice = createSlice({
    name: 'shoppingProducts' ,
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder
        .addCase(fetchAllFilteredProducts.pending,(state,action)=> {
            state.isLoading = true;
        })
        .addCase(fetchAllFilteredProducts.fulfilled,(state,action)=> {

            console.log(action.payload, "action.payload");
            

            state.isLoading= false;
            state.productList = action.payload.data;
        }).addCase(fetchAllFilteredProducts.rejected,(state,action)=> {

            console.log(action.payload);
            

            state.isLoading= false
            state.productList = []
        })
        
    }
})

export default shoppingProductSlice.reducer;