import User from "../models/users.js";

export const getAllTheUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
  }
};

export const createAUser = async (req, res) => {
  try {
    const { email, name, role, profilePicture } = req.body;
    const newUser = new User({ email, name, role, profilePicture });
    await newUser.save().then(() => console.log("User is saved"));
    res.status(201).send({ success: true });
  } catch (error) {
    console.error("User already exists");
  }
};
