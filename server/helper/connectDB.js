const mongoose = require("mongoose");

// env variable;
const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Database connected...");
};

module.exports = connectDB;
