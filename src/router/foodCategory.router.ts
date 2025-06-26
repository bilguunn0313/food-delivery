import express from "express";
import { createFoodCategory } from "../controller/foodCategory/create-food-category";
import { deleteFoodCategory } from "../controller/foodCategory/delete-food-category";
import { getFoodCategory } from "../controller/foodCategory/get-food-category";
import { updatefoodCategory } from "../controller/foodCategory/update-food-category";

const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/createCategory", createFoodCategory);

foodCategoryRouter.delete("/:categoryId", deleteFoodCategory);

foodCategoryRouter.get("/:categoryId", getFoodCategory);

foodCategoryRouter.put("/:categoryId", updatefoodCategory);

export default foodCategoryRouter;
