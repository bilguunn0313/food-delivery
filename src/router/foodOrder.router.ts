import express from "express";
import { createOrder } from "../controller/foodOrder/create-order";

export const foodOrderRouter = express.Router();

foodOrderRouter.post("/", createOrder);
