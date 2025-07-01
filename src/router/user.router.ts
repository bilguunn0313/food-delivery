import express from "express";
import { createUser } from "../controller/user/create-user";
import { getUser } from "../controller/user/get-user";
import { updateUser } from "../controller/user/update-user";
import { deleteUser } from "../controller/user/delete-user";
import { registerUser } from "../controller/Authentication/registration";

export const userRouter = express.Router();

userRouter.post("/new-user", registerUser);

userRouter.get("/:userId", getUser);

userRouter.put("/:userId", updateUser);

userRouter.delete("/:userId", deleteUser);
