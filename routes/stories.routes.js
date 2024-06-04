import { Router } from "express";
import {
  getAllTheStories,
  getSingleStory,
} from "../controllers/stories-controllers.js";

const storyRoutes = Router();

storyRoutes.get("/", getAllTheStories);
storyRoutes.get("/singleStory", getSingleStory);

export default storyRoutes;
