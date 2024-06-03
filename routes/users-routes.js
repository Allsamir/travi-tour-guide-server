import { Router } from "express";
import {
  createAUser,
  getUserBasedOnRole,
  getAllTheUsers,
  getSingleUser,
  updateComments,
} from "../controllers/users-controllers.js";

const userRoutes = Router();

userRoutes.get("/", getAllTheUsers);
userRoutes.get("/user", getSingleUser);
userRoutes.post("/", createAUser);
userRoutes.get("/role", getUserBasedOnRole);
userRoutes.patch("/updateComments", updateComments);

export default userRoutes;
