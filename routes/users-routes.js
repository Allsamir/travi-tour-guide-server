import { Router } from "express";
import {
  createAUser,
  getGuideInformation,
  getAllTheUsers,
  getSingleUser,
  updateComments,
  getTheRoleOfTheUser,
  tokenGeneration,
  clearToken,
  updateRequest,
} from "../controllers/users-controllers.js";
import verifyToken from "../middlewares/verifyToken.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";

const userRoutes = Router();

userRoutes.get("/", verifyToken, verifyAdmin, getAllTheUsers); // not in use yet
userRoutes.get("/user", verifyToken, getSingleUser);
userRoutes.get("/roleOfUser", verifyToken, getTheRoleOfTheUser);
userRoutes.get("/role", getGuideInformation);
userRoutes.post("/", createAUser);
userRoutes.post("/jwt", tokenGeneration);
userRoutes.post("/clearCookie", clearToken);
userRoutes.patch("/updateComments", verifyToken, updateComments);
userRoutes.patch("/request", verifyToken, updateRequest);

export default userRoutes;
