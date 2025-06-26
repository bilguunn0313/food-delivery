import mongoose, { model, Schema } from "mongoose";

const foodSchema = new Schema({
  foodName: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  ingredients: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FoodCategory",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Food = model("Food", foodSchema);

export default Food;
