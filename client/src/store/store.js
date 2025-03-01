import { configureStore } from "@reduxjs/toolkit";
import AdminProductsSlice from './admin/products-slice';
import authReducer from "./auth-slice";
import ShopProductsSlice from './shop/products-slice';




const store = configureStore({
    reducer :{
        auth : authReducer,
        adminProducts : AdminProductsSlice,
        shopProducts : ShopProductsSlice,
    },
});

export default store;