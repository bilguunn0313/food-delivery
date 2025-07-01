import { Response, Request } from "express";
import { FoodOrder } from "../../model/foodOrder";

export const getOrder = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const requester = await FoodOrder.find({ user: userId })
      .populate({
        path: "foodOrderItems",
        select: "food",
      })
      .populate({
        path: "user",
        select: "userName",
      });

    res.status(201).send({ success: true, requester });
  } catch (error) {
    res.status(500).send({ message: "API error", error });
  }
};
