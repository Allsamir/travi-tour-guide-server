import { Router } from "express";
import {
  getAllThePackes,
  getlimitedPackages,
  singlePackage,
} from "../controllers/packages-controllers.js";

const packagesRoute = Router();
packagesRoute.get("/", getAllThePackes);
packagesRoute.get("/limited", getlimitedPackages);
packagesRoute.get("/singlePackage", singlePackage);

export default packagesRoute;
