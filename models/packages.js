import mongoose from "mongoose";

const packagesSchema = mongoose.Schema({
  title: String,
  tourType: String,
  price: Number,
  images: [String],
  description: String,
  tourPlan: {
    day1: String,
    day2: String,
    day3: String,
  },
  location: String,
});

const Package = new mongoose.model("Package", packagesSchema);

export default Package;
