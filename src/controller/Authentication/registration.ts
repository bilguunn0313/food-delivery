import { Response, Request } from "express";
import User from "../../model/user";
export const registerUser = async (req: Request, res: Response) => {
  const { email, password, userName, phoneNumber, address, isVerified } =
    req.body;

  try {
    const user = await new User({
      email,
      password,
      userName,
      phoneNumber,
      address,
      isVerified,
    }).save();
    res.status(201).json({ success: true, "User registred": user });
  } catch (error) {
    res.status(500).send({ message: "Registration failed", error });
  }
};
