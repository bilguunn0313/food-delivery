import mongoose, { model, Schema } from "mongoose";
import { FoodOrderStatusEnum } from "../enum/FoodOrderStatus";

export type FoodOrderItemType = {
  food: mongoose.Schema.Types.ObjectId;
  quantity: number;
  price: number;
};

export const foodOrderItemSchema = new Schema({
  food: { type: mongoose.Schema.Types.ObjectId, ref: "Food", required: true },
  quantity: { type: Number, required: true },
  price: { type: Number },
});

const foodOrderSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  totalPrice: { type: Number, required: true },
  foodOrderItems: [foodOrderItemSchema],
  status: {
    type: String,
    enum: Object.values(FoodOrderStatusEnum),
    default: FoodOrderStatusEnum.PENDING,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const FoodOrder = model("FoodOrder", foodOrderSchema);
