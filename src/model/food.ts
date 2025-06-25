import { model, Schema } from "mongoose";

const foodSchema = new Schema({
  foodName: { type: String, require: true },
  price: { type: Number, require: true },
  image: { type: String, require: true },
  ingredients: { type: String },
  category: { type: Number },
  createdAt: { type: Date, default: Date.now() },
  updated: { type: Date, default: Date.now() },
});

const Food = model("Food", foodSchema);

export default Food;
