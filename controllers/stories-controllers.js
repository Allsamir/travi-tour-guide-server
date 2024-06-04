import Story from "../models/stories.js";

export const getAllTheStories = async (req, res) => {
  try {
    const { count } = req.query;
    const countInInt = parseInt(count);
    const stories = await Story.find({}).limit(countInInt);
    res.status(200).send(stories);
  } catch (error) {
    console.error(error);
  }
};
