import { Router } from "express";
import {
  createAStory,
  getAllTheStories,
  getSingleStory,
} from "../controllers/stories-controllers.js";

const storyRoutes = Router();

storyRoutes.get("/", getAllTheStories);
storyRoutes.post("/", createAStory);
storyRoutes.get("/singleStory", getSingleStory);

export default storyRoutes;
