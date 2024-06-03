import User from "../models/users.js";

export const getAllTheUsers = async (req, res) => {
  // for admin only
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
  }
};

export const createAUser = async (req, res) => {
  // public api for creating users
  try {
    const { email, name, role, profilePicture } = req.body;
    const newUser = new User({ email, name, role, profilePicture });
    await newUser.save().then(() => console.log("User is saved"));
    res.status(201).send({ success: true });
  } catch (error) {
    console.error("User already exists");
  }
};

export const getAllTheGuides = async (req, res) => {
  // public api for getting the role based users
  try {
    const { role } = req.query;
    const guides = await User.find({ role: role });
    res.status(200).send(guides);
  } catch (error) {
    console.error(error);
  }
};
