import express from "express";
import { createTodo, getAllTodos } from "../Controllers/todo.controller";
import { authorization } from "../API/authorization";

const router = express.Router();

router.get("/", authorization, getAllTodos);
router.post("/createTodo", authorization, createTodo);

export default router;
