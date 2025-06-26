import mongoose, { model, Schema } from "mongoose";

const foodOrderItemSchema = new Schema({
  food: { type: mongoose.Schema.Types.ObjectId, ref: "Food", required: true },
  quantity: { type: Number },
});

export const FoodOrderItem = model("FoodOrderItem", foodOrderItemSchema);
