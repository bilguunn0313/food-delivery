import { Response, Request } from "express";
import { FoodOrder, FoodOrderItemType } from "../../model/foodOrder";

import { calculateTotalPrice } from "./calculate-total-price";

type CreateOrderBody = {
  user: string;
  totalPrice: number;
  foodOrderItems: FoodOrderItemType[];
};

export const createOrder = async (req: Request, res: Response) => {
  const { foodOrderItems, user }: CreateOrderBody = req.body;

  const totalPrice = await calculateTotalPrice(foodOrderItems);

  try {
    const order = await new FoodOrder({
      user,
      totalPrice,
      foodOrderItems,
    }).save();

    res.status(201).send({ success: true, order });
  } catch (error) {
    res.status(500).send({ message: "API error", error });
  }
};
