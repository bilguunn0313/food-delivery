import { Response, Request } from "express";
import Food from "../../model/food";
export const createFood = (req: Request, res: Response) => {
  const { foodName, price, image, ingredients, category } = req.body;

  try {
    const food = new Food({
      foodName: foodName,
      price: price,
      image: image,
      ingredients: ingredients,
      category: category,
    }).save();

    res.status(200).send({ success: true, food });
  } catch (error) {
    res.status(200).send({ message: "API error", error });
  }
};
