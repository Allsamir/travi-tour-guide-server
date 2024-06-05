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
} from "../controllers/users-controllers.js";
import verifyToken from "../middlewares/verifyToken.js";

const userRoutes = Router();

userRoutes.get("/", verifyToken, getAllTheUsers); // not in use now
userRoutes.get("/user", verifyToken, getSingleUser); // not in use now
userRoutes.post("/", createAUser);
userRoutes.post("/jwt", tokenGeneration);
userRoutes.post("/clearCookie", clearToken);
userRoutes.get("/role", getGuideInformation);
userRoutes.get("/roleOfUser", verifyToken, getTheRoleOfTheUser);
userRoutes.patch("/updateComments", verifyToken, updateComments);

export default userRoutes;
