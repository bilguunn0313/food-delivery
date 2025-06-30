import { Response, Request } from "express";
import Food from "../../model/food";
export const getAllFood = async (req: Request, res: Response) => {
  try {
    const food = await Food.find();

    res.status(201).send({ success: true, food });
  } catch (error) {
    res.status(500).send({ message: "API error", error });
  }
};
