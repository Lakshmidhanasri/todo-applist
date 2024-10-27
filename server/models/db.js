const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todolist", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("MongoDB Connection Succeeded...");
  } catch (err) {
    console.error(`Error in DB Connection: ${err}`);
    process.exit(1); // Exit the process if unable to connect
  }
};

module.exports = connectDB;
