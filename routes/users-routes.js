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
  getGuideProfile,
  updateGuideProfile,
  createPaymentIntent,
} from "../controllers/users-controllers.js";
import verifyToken from "../middlewares/verifyToken.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";
import verifyGuide from "../middlewares/verifyGuide.js";

const userRoutes = Router();

userRoutes.get("/", verifyToken, verifyAdmin, getAllTheUsers); // not in use yet
userRoutes.get("/user", verifyToken, getSingleUser);
userRoutes.get("/roleOfUser", verifyToken, getTheRoleOfTheUser);
userRoutes.get("/role", getGuideInformation);
userRoutes.get("/guide", verifyToken, verifyGuide, getGuideProfile);
userRoutes.post("/", createAUser);
userRoutes.post("/jwt", tokenGeneration);
userRoutes.post("/clearCookie", clearToken);
userRoutes.post("/createPaymentIntent", verifyToken, createPaymentIntent);
userRoutes.patch("/updateComments", verifyToken, updateComments);
userRoutes.patch("/request", verifyToken, updateRequest);
userRoutes.patch(
  "/updateGuideProfile",
  verifyToken,
  verifyGuide,
  updateGuideProfile,
);

export default userRoutes;
