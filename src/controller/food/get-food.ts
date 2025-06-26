import { Response, Request } from "express";
import Food from "../../model/food";
export const getFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;

  try {
    const food = await Food.findById(foodId).populate("category");

    res.status(201).send({ success: true, food });
  } catch (error) {
    res.status(500).send({ message: "API error", error });
  }
};
