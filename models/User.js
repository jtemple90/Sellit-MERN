const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
   type: String,
   required: true,
   minlength: 6,
 },
 image: {
      type: String,
    },
    products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    }],
},{ timestamps: true }); 

const User = mongoose.model("User", userSchema);

module.exports = User;
