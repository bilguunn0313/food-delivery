import express from "express";
import { createUser } from "../controller/user/create-user";
import { getUser } from "../controller/user/get-user";
import { updateUser } from "../controller/user/update-user";
import { deleteUser } from "../controller/user/delete-user";

export const userRouter = express.Router();

userRouter.post("/createUser", createUser);

userRouter.get("/:userId", getUser);

userRouter.put("/:userId", updateUser);

userRouter.delete("/:userId", deleteUser);
