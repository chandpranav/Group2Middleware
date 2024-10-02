// Import necessary modules
import express from "express";
import mongoose from "mongoose";
import User from "./model/user.js"; // for model
import userRoute from "./routes/user.route.js"; // Import your user routes

const app = express();

app.use(express.json());

// Connect to MongoDB
const mongoConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017"); 
    console.log("DB connected");
  } catch (err) {
    console.error("DB connection error:", err);
  }
};

// Define routes for user-related operations
app.use("/user", userRoute);

// Start the server and connect to the database
const startServer = async () => {
  await mongoConnect(); // Connect to MongoDB
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
};

// Start the server
startServer();
