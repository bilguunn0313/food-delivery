import { Response, Request } from "express";
import { FoodOrderItem } from "../../model/foodOrderItem";

export const getFoodOrderItem = async (req: Request, res: Response) => {
  const { orderId } = req.params;

  try {
    const food = await FoodOrderItem.findById(orderId).populate("food");
    res.status(201).send({ success: true, food });
  } catch (error) {
    res.status(500).send({ message: "API error", error });
  }
};
