import express from "express";

// controllers
import {
  createUser,
  getAllUsers,
  getCurrentUserProfile,
  loginUser,
  logoutUser,
  updateCurrentUserProfile,
} from "../controllers/userController.js";

// middlewares

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", createUser); // For creating a user
router.get("/", authenticate, authorizeAdmin, getAllUsers); // For getting all users
// OR
/* router.route("/")
  .post(createUser) // Handles POST request
  .get(authenticate, authorizeAdmin, getAllUsers); // Handles GET request */

router.post("/auth", loginUser);

router.post("/logout", logoutUser);

router.get("/profile", authenticate, getCurrentUserProfile);
router.put("/profile", authenticate, updateCurrentUserProfile);

export default router;
