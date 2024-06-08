import mongoose from "mongoose";
import User from "../models/users.js";
import jwt from "jsonwebtoken";
import verifyUser from "../middlewares/verifyUser.js";
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
    const { email } = req.query;
    verifyUser(req.user.email, email);
    const user = await User.findOne({ email: email });
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
  }
};

export const getGuideProfile = async (req, res) => {
  try {
    const { email } = req.query;
    const guideProfile = await User.findOne({ email: email });
    res.status(200).send(guideProfile);
  } catch (error) {
    console.error(error);
  }
};

export const updateGuideProfile = async (req, res) => {
  try {
    const { name, profilePicture, skills } = req.body;
    const { id } = req.query;
    let update = {};
    if (name) update.name = name;
    if (profilePicture) update.profilePicture = profilePicture;
    if (skills) update.skills = skills;
    if (Object.keys(update).length === 0) {
      return res
        .status(400)
        .send({ success: false, message: "No fields to update" });
    }
    const updateProfile = await User.findByIdAndUpdate(id, update, {
      new: true,
    });
    if (updateProfile) {
      res.status(200).send({ success: true, message: "Your Profile Updated" });
    } else {
      res.status(404).send({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateRequest = async (req, res) => {
  try {
    const { id, email } = req.query;
    verifyUser(req.user.email, email);
    const updateRequest = await User.findByIdAndUpdate(
      { _id: id },
      {
        requested: true,
      },
      {
        new: true,
      },
    );

    if (updateRequest) {
      res.status(200).send({ success: true, message: "Your Request has sent" });
    }
  } catch (error) {
    console.error(error);
  }
};

export const getTheRoleOfTheUser = async (req, res) => {
  // secure api
  try {
    const { email } = req.query;
    verifyUser(req.user.email, email);
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
/// Token generation
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
