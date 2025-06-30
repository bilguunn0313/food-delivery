import { Schema } from "mongoose";
import Food from "../../model/food";

export const getFoodbyFoodId = async (foodId: Schema.Types.ObjectId) => {
  return await Food.findById(foodId);
};
