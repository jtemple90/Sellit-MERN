// const mongoose = require("mongoose");

// const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/sellit';
// const configOptions = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
// };

// mongoose
//   .connect(connectionString, configOptions)
//   .then(() => console.log("MongoDB successfully connected..."))
//   .catch((err) => console.log(`MongoDB connection error: ${err}`));


module.exports = {
  // users: require('./User'),
  products: require('./Product')
}