import Blog from "../models/blog.js";

export const createABlog = async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save().then(() => console.log("Blog Post created"));
    res
      .status(201)
      .send({ success: true, message: "Blog Posted Successfully" });
  } catch (error) {
    console.error(error);
  }
};
