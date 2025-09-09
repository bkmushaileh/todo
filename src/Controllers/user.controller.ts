import { NextFunction, Request, Response } from "express";
import User from "../Models/User";
import { serverError } from "../Middleware/serverError";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    console.log(error);
    next(serverError);
  }
};
