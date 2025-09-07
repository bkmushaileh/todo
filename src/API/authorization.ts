import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../Config/config";
import { serverError } from "../Middleware/serverError";

export const authorization = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const header = req.headers.authorization;
    if (!header) {
      return next({ message: "No token provided", status: 401 });
    }

    const [scheme, token] = header?.split(" ") || [];
    if (scheme !== "Bearer" || !token) {
      return next({ message: "Invalid auth format", status: 401 });
    }
    try {
      const payload = jwt.verify(token, env.JWT_Secret!);
      (req as any).user = payload;
      next();
    } catch (err) {
      return next({ message: "Invalid or expired token", status: 401 });
    }
  } catch (error) {
    console.log(error);
    next(serverError);
  }
};
