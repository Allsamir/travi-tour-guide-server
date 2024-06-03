import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  profilePicture: String,
  role: String,
  number: String,
  address: String,
  education: String,
  skills: [String],
  work_experience: String,
  rating: Number,
  comments: [
    {
      name: String,
      comment: String,
    },
  ],
});

const User = new mongoose.model("User", userSchema);
export default User;
