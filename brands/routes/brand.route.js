import express from "express";
import { brandController } from "../controllers/brand.controller.js";
const router = express.Router();
router.post("/addBrand", brandController.addBrand);
router.get("/getBrand", brandController.getBrand);
export default router;
