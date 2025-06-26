import { Response, Request } from "express";
import FoodCategory from "../../model/foodCategory";

export const deleteFoodCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;

    const deleteFood = await FoodCategory.findByIdAndDelete(categoryId);

    res
      .status(200)
      .json({ message: "successfully deleted", category: deleteFood });
  } catch (error) {
    res.status(500).send({ message: "failed to delete", error });
  }
};
