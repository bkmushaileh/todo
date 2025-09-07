import { NextFunction, Request, Response } from "express";

export const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { todo } = req.body;
    if (!todo || todo.trim() === "") {
      return res.status(400).json({ message: "Todo text is required" });
    }
  } catch (error) {}
};
