import { Response, Request } from "express";
import User from "../../model/user";
export const registerUser = (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password }).save();
    res.status(200).json({ success: true, "User registred": user });
  } catch (error) {
    res.status(500).send({ message: "Registration failed", error });
  }
};
