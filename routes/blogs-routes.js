import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";
import { createABlog } from "../controllers/blogs-controllers.js";

const blogRoutes = Router();

blogRoutes.post("/", verifyToken, verifyAdmin, createABlog);

export default blogRoutes;
