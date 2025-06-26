import mongoose, { model, Schema } from "mongoose";
import { FoodOrderItem } from "./foodOrderItem";
import { FoodOrderStatusEnum } from "../enum/FoodOrderStatus";

const foodOrderSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  totalPrice: { type: Number, required: true },
  foodOrderItems: { type: mongoose.Schema.Types.ObjectId, required: true },
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
