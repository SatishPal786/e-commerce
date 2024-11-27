import express from "express";
const router = express.Router();
import { orderController } from "../controllers/order.controller.js";
router.get("/getOrder", orderController.getOrder);
router.post("/addOrder", orderController.createOrder);
router.post("/updateOrder/:id", orderController.updateOrder);
export default router;
