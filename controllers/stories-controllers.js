import Story from "../models/stories.js";

export const getAllTheStories = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skip = (page - 1) * limit;
    const stories = await Story.find({}).skip(skip).limit(limit);
    const totalStories = await Story.countDocuments();
    res.status(200).json({
      stories,
      hasMore: skip + limit < totalStories,
    });
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
