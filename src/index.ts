import express, { Request, Response } from "express";
import { connectDb } from "./database/database";
import foodCategoryRouter from "./router/foodCategory.router";

const port = 3001;
const app = express();
app.use(express.json());
app.use("/", foodCategoryRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});

app.listen(port, async () => {
  await connectDb();
  console.log(`listening on ${port}`);
});
