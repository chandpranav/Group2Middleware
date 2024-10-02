import { Router } from "express";
import {
  getUserData,
  createUser,
  updateUserData,
  deleteUserData,
} from "../controller/user.controller.js"; // Import controller functions
import checkUser from "../middleware/checkuser.middleware.js"; // Import your middleware

const userRoute = Router();

// Define all the routes for user-related operations
userRoute.get("/get-user/:id", getUserData); // Read
userRoute.post("/api/v1/users", createUser); // Create
userRoute.patch("/api/v1/users/:id", updateUserData); // Update
userRoute.delete("/api/v1/users/:id", deleteUserData); // Delete

export default userRoute;
