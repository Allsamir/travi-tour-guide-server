import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
  name: String,
  comment: String,
  rating: Number,
});
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  profilePicture: String,
  role: String,
  skills: [String],
  rating: Number,
  requested: Boolean,
  changedRole: Boolean,
  comments: [commentSchema],
});

const User = new mongoose.model("User", userSchema);
export default User;
