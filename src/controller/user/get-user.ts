import { Response, Request } from "express";
import User from "../../model/user";
export const getUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    res.status(201).send({ success: true, user });
  } catch (error) {
    res.status(500).send({ message: "API error", error });
  }
};
