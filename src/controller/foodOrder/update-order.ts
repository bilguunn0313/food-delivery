import { Response, Request } from "express";
import { FoodOrder } from "../../model/foodOrder";
export const updateOrder = async (req: Request, res: Response) => {
  const { foodOrderId } = req.params;
  const { status } = req.body;
  try {
    const updateStatus = await FoodOrder.findOneAndUpdate(
      { _id: foodOrderId },
      { new: true },
      { status }
    );

    res.status(201).send({ success: true, updated: updateStatus });
  } catch (error) {
    res.status(500).send({ message: "API error", error });
  }
};

// try {
//     const order = await FoodOrder.updateOne(
//       { _id: foodOrderId, foodOrderItems: { food: foodOrderItems[0].food } },
//       {
//         foodOrderItems: {
//           food: foodOrderItems[0].food,
//           quantity: foodOrderItems[0].quantity,
//         },
//       },
//       { new: true }
//     );
//     console.log("id", order);

//     res.status(201).send({ success: true, updated: order });
//   } catch (error) {
//     res.status(500).send({ message: "API error", error });
//   }
// };
