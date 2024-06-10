import { Router } from "express";
import userRoutes from "./users-routes.js";
import packagesRoute from "./pakages-route.js";
import bookingsRoute from "./booking.routes.js";
import storyRoutes from "./stories.routes.js";
import blogRoutes from "./blogs-routes.js";
const appRouter = Router();

appRouter.use("/users", userRoutes);
appRouter.use("/packages", packagesRoute);
appRouter.use("/bookings", bookingsRoute);
appRouter.use("/stories", storyRoutes);
appRouter.use("/blogs", blogRoutes);
export default appRouter;
