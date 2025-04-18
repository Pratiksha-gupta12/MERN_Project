import { configureStore } from "@reduxjs/toolkit";
import AdminProductsSlice from './admin/products-slice';
import authReducer from "./auth-slice";
import ShopProductsSlice from './shop/products-slice';
import ShopCartSlice from './shop/cart-slice';




const store = configureStore({
    reducer :{
        auth : authReducer,
        adminProducts : AdminProductsSlice,
        shopProducts : ShopProductsSlice,
        shopCart : ShopCartSlice,
    },
});

export default store;