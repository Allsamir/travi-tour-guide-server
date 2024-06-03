import { Router } from "express";
import { createNewBookings } from "../controllers/bookings-controllers.js";

const bookingsRoute = Router();

bookingsRoute.post("/", createNewBookings);

export default bookingsRoute;
