import { NextFunction, Request, Response } from "express";
import Todo from "../Models/Todo";
import { serverError } from "../Middleware/serverError";
import User from "../Models/User";

export const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { todo, status } = req.body;

    if (!todo || todo.trim() === "") {
      return next({ status: 400, message: "Todo text is required" });
    }
    console.log(req.user);
    if (!req.user?._id) {
      return next({ status: 401, message: "Unauthorized: please log in" });
    }

    const newTodo = new Todo({ todo, user: req.user._id });
    await newTodo.save();

    await User.findByIdAndUpdate(req.user._id, {
      $push: { todos: newTodo._id },
    });
    return res.status(201).json({
      message: `Todo created successfully: ${newTodo}`,
      todo: newTodo,
    });
  } catch (error) {
    console.error(error);

    return next(serverError);
  }
};

export const getAllTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await Todo.find();
    if (!todos) {
      return next({ message: "No todos found!", status: 401 });
    }
    return res.json(todos);
  } catch (error) {
    console.log(error);
    return next(serverError);
  }
};
