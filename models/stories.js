import mongoose from "mongoose";

const storiesSchema = new mongoose.Schema({
  name: String,
  email: String,
  spot: String,
  image: String,
  tourType: String,
  story: String,
});

const Story = new mongoose.model("stories", storiesSchema);

export default Story;
