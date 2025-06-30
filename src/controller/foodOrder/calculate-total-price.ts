import currency from "currency.js";
import { FoodOrderItemType } from "../../model/foodOrder";
import { getFoodbyFoodId } from "./get-food-by-food-id";

export const calculateTotalPrice = async (
  foodOrderItems: FoodOrderItemType[]
) => {
  const foodsPrice = await Promise.all(
    foodOrderItems.map(async (foodOrderItem) => {
      const food = await getFoodbyFoodId(foodOrderItem.food);

      if (!food?.price) return 0;

      return currency(food.price).multiply(foodOrderItem.quantity).value;
    })
  );

  const totalPrice = foodsPrice.reduce(
    (acc, curr) => currency(acc).add(curr).value,
    0
  );

  return totalPrice;
};
