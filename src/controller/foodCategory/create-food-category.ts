import { Response, Request } from "express";
import FoodCategory from "../../model/foodCategory";
export const createFoodCategory = (req: Request, res: Response) => {
  const { categoryName } = req.body;
  try {
    const foodCategory = new FoodCategory({
      categoryName: categoryName,
    }).save();

    res.status(200).send({ success: true, foodCategory });
  } catch (error) {
    res.status(400).send({ message: "api error", error });
  }
};
