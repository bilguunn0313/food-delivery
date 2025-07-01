import { Response, Request } from "express";
import { FoodOrder } from "../../model/foodOrder";

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await FoodOrder.find();

    res.status(201).send({ success: true, orders });
  } catch (error) {
    res.status(500).send({ message: "API error", error });
  }
};
