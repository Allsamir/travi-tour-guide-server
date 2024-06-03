import { Router } from "express";
import {
  createAUser,
  getAllTheGuides,
  getAllTheUsers,
} from "../controllers/users-controllers.js";

const userRoutes = Router();

userRoutes.get("/", getAllTheUsers);
userRoutes.post("/", createAUser);
userRoutes.get("/role", getAllTheGuides);

export default userRoutes;
