import express from "express";
const router = express.Router();
import { productController } from "../controllers/product.controller.js";
router.post("/addProduct", productController.addProduct);
router.get("/getProduct", productController.getProduct);
export default router;
