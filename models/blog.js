import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  body: String,
  thumbnail: String,
});

const Blog = new mongoose.model("Blog", blogSchema);
export default Blog;
