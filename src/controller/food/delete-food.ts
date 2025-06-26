import { Response, Request } from "express";
import Food from "../../model/food";
export const deleteFood = async (req: Request, res: Response) => {
  const { foodId } = req.params;

  try {
    const food = await Food.findByIdAndDelete(foodId);

    res.status(201).send({ deleted: true, food });
  } catch (error) {
    res.status(500).send({ message: "API error", error });
  }
};
