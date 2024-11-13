import express from "express";
import { brandController } from "../controllers/brand.controller.js";
const router = express.Router();
router.post("/addBrand", brandController.addBrand);
export default router;
