import { Response, Request } from "express";
import FoodCategory from "../../model/foodCategory";

export const updatefoodCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const { categoryName } = req.body;

    const updateFood = await FoodCategory.findByIdAndUpdate(categoryId, {
      categoryName,
    });

    res
      .status(200)
      .json({ message: "successfully updated", category: updateFood });
  } catch (error) {
    res.status(500).send({ message: "failed to update", error });
  }
};
