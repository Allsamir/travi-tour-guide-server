import { Router } from "express";
import userRoutes from "./users-routes.js";
import packagesRoute from "./pakages-route.js";
import bookingsRoute from "./booking.routes.js";
const appRouter = Router();

appRouter.use("/users", userRoutes);
appRouter.use("/packages", packagesRoute);
appRouter.use("/bookings", bookingsRoute);
export default appRouter;
