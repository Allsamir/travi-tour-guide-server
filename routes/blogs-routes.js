import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import verifyAdmin from "../middlewares/verifyAdmin.js";
import {
  createABlog,
  getAllTheBlogs,
  getSingleBlog,
} from "../controllers/blogs-controllers.js";

const blogRoutes = Router();

blogRoutes.get("/", getAllTheBlogs);
blogRoutes.get("/singleBlog", getSingleBlog);
blogRoutes.post("/", verifyToken, verifyAdmin, createABlog);

export default blogRoutes;
