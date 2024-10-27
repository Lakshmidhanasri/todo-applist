const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");
const connectDB = require("./models/db"); // Import the DB connection function

const app = express();

// Connect to MongoDB
(async () => {
  try {
    await connectDB(); // Await the database connection
    console.log("Database connected successfully.");

    // Middleware
    app.use(express.json());
    app.use(cors());

    // Routes
    app.use("/api/tasks", router);

    // Start the server
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to the database", err);
    process.exit(1); // Exit the process with failure
  }
})();
