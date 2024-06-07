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

export const getSingleStory = async (req, res) => {
  try {
    const { id } = req.query;
    const story = await Story.findById({ _id: id });
    res.status(200).send(story);
  } catch (error) {
    console.error(error);
  }
};

export const createAStory = async (req, res) => {
  try {
    const newStory = new Story(req.body);
    await newStory.save().then(() => console.log("Story saved"));
    res
      .status(201)
      .send({ success: true, message: "Thank you for sharing your story" });
  } catch (error) {
    console.error(error);
  }
};
