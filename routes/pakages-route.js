import { Router } from "express";
import {
  getlimitedPackages,
  singlePackage,
} from "../controllers/packages-controllers.js";

const packagesRoute = Router();

packagesRoute.get("/limited", getlimitedPackages);
packagesRoute.get("/singlePackage", singlePackage);

export default packagesRoute;
