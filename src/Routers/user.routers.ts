import express from "express";
import { getAllUsers } from "../Controllers/user.controller";

const router = express.Router();

router.get("/", getAllUsers);

export default router;
