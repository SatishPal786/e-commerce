import express from "express";
import { categoryController } from "../controllers/category.controller.js";
const router = express.Router();
router.get("/getCategory", categoryController.getCategory);
router.post("/addCategory", categoryController.addCategory);
export default router;
