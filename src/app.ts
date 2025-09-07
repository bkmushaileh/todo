import express from "express";
import { env } from "./Config/config";
import connectDB from "./Database/database";
import cors from "cors";
import morgan from "morgan";
import { errorHandler } from "./Middleware/errorHandler";
import path from "path";
import { notFound } from "./Middleware/notFound";
import authRouter from "./Auth/auth.routers";

connectDB();

const app = express();
app.use(express.json());
app.use("/media", express.static(path.join(__dirname, "../media")));
app.use(cors());
app.use(morgan("dev"));

app.use("/api/auth", authRouter);

app.use(errorHandler);
app.use(notFound);

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
