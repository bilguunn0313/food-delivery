import express, { Request, Response } from "express";
import { connectDb } from "./database/database";
import foodCategoryRouter from "./router/foodCategory.router";
import { foodRouter } from "./router/food.router";
import { userRouter } from "./router/user.router";
import { foodOrderItemRouter } from "./router/foodOrderItem.router";
import { foodOrderRouter } from "./router/foodOrder.router";

const port = 3001;
const app = express();
app.use(express.json());
app.use("/category", foodCategoryRouter);
app.use("/food", foodRouter);
app.use("/user", userRouter);
app.use("/orderItem", foodOrderItemRouter);
app.use("/foodOrder", foodOrderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.listen(port, async () => {
  await connectDb();
  console.log(`listening on ${port}`);
});
