import express from "express";
import { createFood } from "../controller/food/create-food";
import { getFood } from "../controller/food/get-food";
import { deleteFood } from "../controller/food/delete-food";
import { updateFood } from "../controller/food/update-food";
import { getAllFood } from "../controller/food/get-allFood";

export const foodRouter = express.Router();

foodRouter.post("/createFood", createFood);

foodRouter.get("/:foodId", getFood);

foodRouter.get("/", getAllFood);

foodRouter.delete("/:foodId", deleteFood);

foodRouter.put("/:foodId", updateFood);
