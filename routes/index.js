import { Router } from "express";
import userRoutes from "./users-routes.js";

const appRouter = Router();

appRouter.use("/users", userRoutes);

export default appRouter;
