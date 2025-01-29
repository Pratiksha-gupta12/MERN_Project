const moongoose = require('mongoose');

const ProductSchema = new moongoose.Schema({
    image: String,
    title: String,
    description: String,
    category: String,
    brand: String,
    price: Number,
    salePrice: Number,
    totalStock: Number

},{timestamps: true}
);

module.exports = moongoose.model('Products', ProductSchema)
