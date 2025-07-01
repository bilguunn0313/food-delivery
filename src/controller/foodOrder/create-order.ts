import { Response, Request } from "express";
import { FoodOrder, FoodOrderItemType } from "../../model/foodOrder";

type CreateOrderBody = {
  user: string;
  totalPrice: number;
  foodOrderItems: FoodOrderItemType[];
};

export const createOrder = async (req: Request, res: Response) => {
  const { foodOrderItems, user, totalPrice, food, quantity } = req.body;

  try {
    const order = await new FoodOrder({
      user,
      totalPrice,
      foodOrderItems,
      food,
      quantity,
    }).save();

    res.status(201).send({ success: true, order });
  } catch (error) {
    res.status(500).send({ message: "API error", error });
  }
};
