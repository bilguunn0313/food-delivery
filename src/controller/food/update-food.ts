import { Response, Request } from "express";
import Food from "../../model/food";
export const updateFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;
  const { foodName, price, ingredients, category } = req.body;

  try {
    const food = await Food.findByIdAndUpdate(foodId, {
      foodName,
      price,
      ingredients,
      category,
      new: true,
      runValidators: true,
    });

    res.status(201).send({ success: true, updated: food });
  } catch (error) {
    res.status(500).send({ message: "API error", error });
  }
};
