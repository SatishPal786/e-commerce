import express from "express";
import { userController } from "../controllers/user.controller.js";
const router = express.Router();
router.post("/createUser", userController.createUser);
router.get("/loginUser", userController.loginUser);
router.post("/updateUser/:id", userController.updateUser);
export default router;
