import express, { Request, Response } from "express";
import cors from "cors";

import { connectDb } from "./database/database";
import foodCategoryRouter from "./router/foodCategory.router";
import { foodRouter } from "./router/food.router";
import { userRouter } from "./router/user.router";
import { foodOrderRouter } from "./router/foodOrder.router";

const port = 3001;
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use("/category", foodCategoryRouter);
app.use("/food", foodRouter);
app.use("/user", userRouter);
app.use("/foodOrder", foodOrderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.listen(port, async () => {
  await connectDb();
  console.log(`listening on ${port}`);
});
