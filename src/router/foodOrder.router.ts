import express from "express";
import { createOrder } from "../controller/foodOrder/create-order";
import { getOrder } from "../controller/foodOrder/get-order";
import { updateOrder } from "../controller/foodOrder/update-order";
import { getOrders } from "../controller/foodOrder/get-orders";

export const foodOrderRouter = express.Router();

foodOrderRouter.post("/new-orders", createOrder);

foodOrderRouter.get("/:userId", getOrder);

foodOrderRouter.put("/:foodOrderId", updateOrder);

foodOrderRouter.get("/orders", getOrders);
