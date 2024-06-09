import { Router } from "express";
import {
  createAPackage,
  getAllThePackes,
  getPackagesBasedOnType,
  getWishList,
  singlePackage,
} from "../controllers/packages-controllers.js";
import verifyToken from "../middlewares/verifyToken.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";
const packagesRoute = Router();
packagesRoute.get("/", getAllThePackes);
packagesRoute.get("/singlePackage", singlePackage);
packagesRoute.get("/type", getPackagesBasedOnType);
packagesRoute.post("/", verifyToken, verifyAdmin, createAPackage);
packagesRoute.post("/wishList", getWishList);
export default packagesRoute;
