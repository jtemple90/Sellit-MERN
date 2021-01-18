const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "localhost:27017/sellit", { 
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false});

const db = mongoose.connection;

db.once("connected", () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
