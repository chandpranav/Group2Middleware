import { Router } from "express";
import {
  getUserData,
  createUser,
  updateUserData,
  deleteUserData,
} from "../controllers/userController.js"; // Import controller functions

const userRoute = Router();

// Define all the routes for user-related operations
userRoute.get("/get-user/:id", getUserData); // Read
userRoute.post("/api/v1/users", createUser); // Create
userRoute.patch("/api/v1/users/:id", updateUserData); // Update
userRoute.delete("/api/v1/users/:id", deleteUserData); // Delete

export default userRoute;
