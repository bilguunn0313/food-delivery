import mongoose, { model, Schema } from "mongoose";
import { FoodOrderStatusEnum } from "../enum/FoodOrderStatus";
import currency from "currency.js";

export type FoodOrderItemType = {
  food: mongoose.Schema.Types.ObjectId;
  quantity: number;
  price: number;
};

export const foodOrderItemSchema = new Schema({
  food: { type: mongoose.Schema.Types.ObjectId, ref: "Food", required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const foodOrderSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  totalPrice: { type: Number },
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

foodOrderSchema.pre("save", function (next) {
  const total = this.foodOrderItems.reduce((sum, item) => {
    return sum.add(currency(item.price).multiply(item.quantity));
  }, currency(0));

  this.totalPrice = total.value;
  next();
});

export const FoodOrder = model("FoodOrder", foodOrderSchema);
