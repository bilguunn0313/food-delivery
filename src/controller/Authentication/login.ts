import { Response, Request } from "express";
import User from "../../model/user";
import bcrypt from "bcrypt";
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isMatch = await (user as any).isValidPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({ success: true, "Login success": user });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};
