import { Response, Request } from "express";
import Food from "../../model/food";
export const createFood = async (req: Request, res: Response) => {
  const { foodName, price, image, ingredients, category } = req.body;

  try {
    const food = await new Food({
      foodName,
      price,
      image,
      ingredients,
      category,
    }).save();

    res.status(201).send({ success: true, food });
  } catch (error) {
    res.status(500).send({ message: "API error", error });
  }
};

export const getAllFoods = async (req: Request, res: Response) => {
  try {
    const foods = await Food.find().populate("category", "categoryName");
    res.status(200).json(foods);
  } catch (error) {
    console.error("Хоол татах үед алдаа:", error);
    res.status(500).json({ message: "Серверийн алдаа", error });
  }
};
