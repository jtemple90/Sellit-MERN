const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  postedDate:{
    type: Date, default: Date.now
  }
  // free: Boolean
}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;