import { Response, Request } from "express";
import User from "../../model/user";
export const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const user = await User.findByIdAndDelete(userId);
    res.status(201).send({ deleted: true, user });
  } catch (error) {
    res.status(500).send({ message: "failed to delete", error });
  }
};
