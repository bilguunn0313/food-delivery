import { Response, Request } from "express";
import User from "../../model/user";

export const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { userName, password, email, phoneNumber, address, role, isVerified } =
    req.body;

  try {
    const user = await User.findByIdAndUpdate(userId, {
      userName,
      password,
      email,
      phoneNumber,
      address,
      role,
      isVerified,
      new: true,
      runValidators: true,
    });
    res.status(201).send({ success: true, updated: user });
  } catch (error) {
    res.status(500).send({ message: "API error", error });
  }
};
