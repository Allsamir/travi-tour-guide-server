import { Router } from "express";
import {
  getAllThePackes,
  getPackagesBasedOnType,
  singlePackage,
} from "../controllers/packages-controllers.js";

const packagesRoute = Router();
packagesRoute.get("/", getAllThePackes);
packagesRoute.get("/singlePackage", singlePackage);
packagesRoute.get("/type", getPackagesBasedOnType);

export default packagesRoute;
