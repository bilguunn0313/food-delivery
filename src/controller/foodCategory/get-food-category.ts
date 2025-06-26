import { Response, Request } from "express";
import FoodCategory from "../../model/foodCategory";

export const getFoodCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;

    const getCategory = await FoodCategory.findById(categoryId);
    const getCategories = await FoodCategory.find();

    res.status(200).json({ message: "success", category: getCategory });
  } catch (error) {
    res.status(500).send({ message: "failed to get category", error });
  }
};
