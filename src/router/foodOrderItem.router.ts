import express from "express";
import { getFoodOrderItem } from "../controller/FoodOrderItem/get-food-order-item";

export const foodOrderItemRouter = express.Router();

foodOrderItemRouter.get("/:orderId", getFoodOrderItem);
