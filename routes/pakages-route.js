import { Router } from "express";
import {
  getAllThePackes,
  getPackagesBasedOnType,
  getWishList,
  singlePackage,
} from "../controllers/packages-controllers.js";

const packagesRoute = Router();
packagesRoute.get("/", getAllThePackes);
packagesRoute.get("/singlePackage", singlePackage);
packagesRoute.get("/type", getPackagesBasedOnType);
packagesRoute.post("/wishList", getWishList);

export default packagesRoute;
