import { Response, Request } from "express";
import FoodCategory from "../../model/foodCategory";

export const getAllCategory = async (req: Request, res: Response) => {
  try {
    const getCategories = await FoodCategory.find();

    res.status(200).json({ message: "success", category: getCategories });
  } catch (error) {
    res.status(500).send({ message: "failed to get category", error });
  }
};
