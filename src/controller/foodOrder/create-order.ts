import { Response, Request } from "express";
import { FoodOrder } from "../../model/foodOrder";
export const createOrder = (req: Request, res: Response) => {
  const { totalPrice, foodOrderItems } = req.body;
  const { user } = req.params;
  try {
    const order = new FoodOrder(user, {
      totalPrice,
      foodOrderItems,
    }).save();
    res.status(201).send({ success: true, order });
  } catch (error) {
    res.status(500).send({ message: "API error", error });
  }
};
