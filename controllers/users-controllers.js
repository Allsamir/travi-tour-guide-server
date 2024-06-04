import mongoose from "mongoose";
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

export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.query;
    const user = await User.findById({ _id: id });
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
  }
};

export const getTheRoleOfTheUser = async (req, res) => {
  try {
    const { email } = req.query;
    const role = await User.findOne({ email: email }, "_id role");
    res.status(200).send(role);
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

export const getUserBasedOnRole = async (req, res) => {
  // public api for getting the role based users
  try {
    const { role, id } = req.query;
    const query = { role: role };
    if (id) {
      query._id = id;
    }
    const guides = await User.find(query);
    if (guides.length === 1) {
      const [guide] = guides;
      return res.status(200).send(guide);
    }
    res.status(200).send(guides);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "An error occurred" });
  }
};

export const updateComments = async (req, res) => {
  try {
    const { id } = req.query;
    const { name, comment, rating } = req.body;
    console.log(req.body);
    const updateUser = await User.findByIdAndUpdate(
      { _id: id },
      {
        $push: {
          comments: {
            _id: new mongoose.Types.ObjectId(),
            name: name,
            comment: comment,
            rating: rating,
          },
        },
      },
      {
        new: true,
        useFindAndModify: false,
      },
    );
    if (updateUser) {
      res.status(201).send({ success: true, message: "Thank you" });
    }
    console.log(updateUser);
  } catch (error) {
    console.error(error);
  }
};
