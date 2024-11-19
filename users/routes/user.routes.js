import express from "express";
import { userController } from "../controllers/user.controller.js";
import { authenticateToken } from "../../middleware/auth.middleware.js";
const router = express.Router();
router.post("/createUser", userController.createUser);
router.get("/loginUser", userController.loginUser);
router.post("/updateUser/:id", authenticateToken, userController.updateUser);
export default router;
