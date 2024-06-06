import mongoose from "mongoose";

const storiesSchema = new mongoose.Schema({
  name: String,
  email: String,
  profileImage: String,
  spot: String,
  image: String,
  tourType: String,
  rating: Number,
  story: String,
});

const Story = new mongoose.model("stories", storiesSchema);

export default Story;
