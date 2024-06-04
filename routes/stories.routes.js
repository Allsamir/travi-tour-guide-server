import { Router } from "express";
import { getAllTheStories } from "../controllers/stories-controllers.js";

const storyRoutes = Router();

storyRoutes.get("/", getAllTheStories);

export default storyRoutes;
