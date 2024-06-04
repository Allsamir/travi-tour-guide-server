import { Router } from "express";
import {
  getAllThePackes,
  getPackagesBasedOnType,
  getlimitedPackages,
  singlePackage,
} from "../controllers/packages-controllers.js";

const packagesRoute = Router();
packagesRoute.get("/", getAllThePackes);
packagesRoute.get("/limited", getlimitedPackages);
packagesRoute.get("/singlePackage", singlePackage);
packagesRoute.get("/type", getPackagesBasedOnType);

export default packagesRoute;
