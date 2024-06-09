import { Router } from "express";
import {
  createNewBookings,
  deleteBooking,
  getGuideAssignedTourists,
  getSingleBooking,
  getUsersBookigs,
  handleStatus,
  updatePaid,
} from "../controllers/bookings-controllers.js";
import verifyToken from "../middlewares/verifyToken.js";
import verifyGuide from "../middlewares/verifyGuide.js";

const bookingsRoute = Router();

bookingsRoute.get("/", verifyToken, getUsersBookigs);
bookingsRoute.get("/guide", verifyToken, verifyGuide, getGuideAssignedTourists);
bookingsRoute.get("/singleBooking", verifyToken, getSingleBooking);
bookingsRoute.post("/", verifyToken, createNewBookings);
bookingsRoute.patch("/status", verifyToken, verifyGuide, handleStatus);
bookingsRoute.patch("/paid", verifyToken, updatePaid);
bookingsRoute.delete("/", verifyToken, deleteBooking);

export default bookingsRoute;
