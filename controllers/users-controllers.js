import mongoose from "mongoose";
import User from "../models/users.js";
import jwt from "jsonwebtoken";
const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
};
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
  // secure api
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

export const getGuideInformation = async (req, res) => {
  // public api for getting the role based users
  try {
    const { role, id } = req.query;
    if (role === "admin") {
      return res.status(403).send({ message: "Access Forbidden" });
    } else if (role === "user") {
      return res.status(403).send({ message: "Access Forbidden" });
    }
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
  // secure api
  try {
    const { id } = req.query;
    const { name, comment, rating } = req.body;
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

export const tokenGeneration = async (req, res) => {
  try {
    const { email } = req.body;
    const token = jwt.sign(
      {
        email: email,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" },
    );
    res.cookie("token", token, cookieOptions).send({ success: true });
  } catch (error) {
    console.error(error);
  }
};

export const clearToken = async (req, res) => {
  try {
    res
      .clearCookie("token", { ...cookieOptions, maxAge: 0 })
      .send({ success: true });
  } catch (error) {
    console.error(error);
  }
};
