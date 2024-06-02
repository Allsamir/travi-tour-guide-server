import { Router } from "express";
import {
  createAUser,
  getAllTheUsers,
} from "../controllers/users-controllers.js";

const userRoutes = Router();

userRoutes.get("/", getAllTheUsers);
userRoutes.post("/", createAUser);

export default userRoutes;
