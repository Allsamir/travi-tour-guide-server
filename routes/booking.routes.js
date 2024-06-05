import { Router } from "express";
import { createNewBookings } from "../controllers/bookings-controllers.js";
import verifyToken from "../middlewares/verifyToken.js";

const bookingsRoute = Router();

bookingsRoute.post("/", verifyToken, createNewBookings);

export default bookingsRoute;
