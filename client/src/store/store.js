import { configureStore } from "@reduxjs/toolkit";
import AdminProductsSlice from './admin/products-slice';
import authReducer from "./auth-slice";
import ShopProductsSlice from './shop/products-slice';
import ShopCartSlice from './shop/cart-slice';
import ShopAddressSlice from './shop/address-slice';
import ShopOrderSlice from './shop/order-slice';




const store = configureStore({
    reducer :{
        auth : authReducer,
        adminProducts : AdminProductsSlice,
        shopProducts : ShopProductsSlice,
        shopCart : ShopCartSlice,
        shopAddress : ShopAddressSlice,
        shopOrder : ShopOrderSlice,
    },
});

export default store;