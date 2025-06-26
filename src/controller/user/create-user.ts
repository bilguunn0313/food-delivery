import { Response, Request } from "express";
import User from "../../model/user";

export const createUser = (req: Request, res: Response) => {
  const { userName, password, email, phoneNumber, address, role, isVerified } =
    req.body;
  const { id } = req.params;

  try {
    const user = new User({
      userName,
      password,
      email,
      phoneNumber,
      address,
      role,
      isVerified,
    }).save();
    res.status(201).send({ success: true, user });
  } catch (error) {
    res.status(500).send({ message: "API error", error });
  }
};
