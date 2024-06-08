import { Router } from "express";
import {
  createNewBookings,
  deleteBooking,
  getUsersBookigs,
} from "../controllers/bookings-controllers.js";
import verifyToken from "../middlewares/verifyToken.js";

const bookingsRoute = Router();

bookingsRoute.get("/", verifyToken, getUsersBookigs);
bookingsRoute.post("/", verifyToken, createNewBookings);
bookingsRoute.delete("/", verifyToken, deleteBooking);

export default bookingsRoute;
