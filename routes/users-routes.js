import { Router } from "express";
import {
  createAUser,
  getUserBasedOnRole,
  getAllTheUsers,
  getSingleUser,
  updateComments,
  getTheRoleOfTheUser,
} from "../controllers/users-controllers.js";

const userRoutes = Router();

userRoutes.get("/", getAllTheUsers); // not in use now
userRoutes.get("/user", getSingleUser); // not in use now
userRoutes.post("/", createAUser);
userRoutes.get("/role", getUserBasedOnRole);
userRoutes.get("/roleOfUser", getTheRoleOfTheUser);
userRoutes.patch("/updateComments", updateComments);

export default userRoutes;
