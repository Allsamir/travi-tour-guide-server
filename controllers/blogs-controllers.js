import Blog from "../models/blog.js";

export const getAllTheBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).send(blogs);
  } catch (error) {
    console.error(error);
  }
};

export const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.query;
    const blog = await Blog.findById({ _id: id });
    res.status(200).send(blog);
  } catch (error) {
    console.error(error);
  }
};

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
