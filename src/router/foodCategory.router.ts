import express from "express";
import { createFoodCategory } from "../controller/foodCategory/create-food-category";
import { deleteFoodCategory } from "../controller/foodCategory/delete-food-category";
import { getFoodCategory } from "../controller/foodCategory/get-food-category";
import { updatefoodCategory } from "../controller/foodCategory/update-food-category";
import { getAllCategory } from "../controller/foodCategory/get-allFood-category";

const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/new-category", createFoodCategory);

foodCategoryRouter.delete("/:categoryId", deleteFoodCategory);

foodCategoryRouter.get("/:categoryId", getFoodCategory);

foodCategoryRouter.get("/", getAllCategory);

foodCategoryRouter.put("/:categoryId", updatefoodCategory);

export default foodCategoryRouter;
