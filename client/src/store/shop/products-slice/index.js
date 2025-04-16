/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
  productDetails: null,
};

export const fetchAllFilteredProducts = createAsyncThunk(
  "/products/fetchAllProducts",
  async ({ filterParams, sortParams }) => {
    // console.log(fetchAllFilteredProducts, "fetchAllFilteredProducts")

    const query = new URLSearchParams({
      ...filterParams,
      sortBy: sortParams,
    });

    const result = await axios.get(
      `http://localhost:5001/api/shop/products/get?${query}`
    );
    console.log(result);
    return result?.data;
  }
);

export const fetchProductDetails = createAsyncThunk(
  "/products/fetchProductDetails",
  async (id) => {
    const result = await axios.get(
      `http://localhost:5001/api/shop/products/get/${id}`
    );
    return result?.data;
  }
);

// export const fetchProductDetails = createAsyncThunk('/products/fetchProductDetails', async (id) => {
//     try {
//         const result = await axios.get(`http://localhost:5001/api/shop/products/get/${id}`);
//         console.log(result.data, "API Response for Product Details");
//         return result.data;
//     } catch (error) {
//         console.error("Error fetching product details:", error);
//         throw error;
//     }
// });

// export const fetchProductDetails = createAsyncThunk('/products/fetchProductDetails', async (id) => {
//     try {
//         console.log(`Fetching product details for ID: ${id}`);
//         const response = await axios.get(`http://localhost:5001/api/shop/products/get/${id}`);
//         console.log(response.data, "Product Details from API"); // ✅ Debug API response
//         return response.data; // ✅ Return correct data
//     } catch (error) {
//         console.error("Error fetching product details:", error);
//         throw error;
//     }
// });

const shoppingProductSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {
    setProductDetails: (state) => {
      state.productDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFilteredProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
        console.log(action.payload, "action.payload");

        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(fetchAllFilteredProducts.rejected, (state, action) => {
        // console.log(action.payload);

        state.isLoading = false;
        state.productList = [];
      })
      .addCase(fetchProductDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload.data;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.productDetails = null;
        
      });
  },
});

export const {setProductDetails} = shoppingProductSlice.actions;

export default shoppingProductSlice.reducer;
