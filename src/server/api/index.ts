import { Router } from "express";
import { createUserRouter } from "./auth/createUser.js";

export const apiRouter = Router();

apiRouter.use("/auth", createUserRouter);