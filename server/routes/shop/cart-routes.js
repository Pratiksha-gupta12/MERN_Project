const express = require("express");

const {addToCart, fetchCartItems, deleteCartItem, updateCartItemQty} = require('../../controllers/shop/cart-controller');

const router = express.Router();

router.post('/add', addToCart);
router.get();
router.put();
router.delete();
