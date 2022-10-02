const mongoose = require("mongoose")

//user Product schema 
const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String,
    company: String,
    // password:String,
})
//user Product collection
const Product = new mongoose.model("Product", productSchema)

module.exports = Product;