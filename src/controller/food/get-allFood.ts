import { Response, Request } from "express";
import Food from "../../model/food";
import FoodCategory from "../../model/foodCategory";
export const getAllFood = async (req: Request, res: Response) => {
  try {
    const food = await Food.find();
    const categories = await FoodCategory.find();
    const foodWithCategories = await Food.aggregate([
      {
        $lookup: {
          from: "foodcategories",
          localField: "category",
          foreignField: "_id",
          as: "categoryDetails",
        },
      },
      {
        $unwind: "$categoryDetails",
      },
      {
        $group: {
          _id: "$categoryDetails._id",
          categoryName: {
            $first: "$categoryDetails.categoryName",
          },
          foods: {
            $push: {
              _id: "$_id",
              foodName: "$foodName",
              price: "$price",
              image: "$image",
              ingredients: "$ingredients",
            },
          },
          count: { $sum: 1 },
        },
      },
    ]);

    res.status(200).send({ success: true, foodWithCategories });
  } catch (error) {
    res.status(500).send({ message: "API error", error });
  }
};
