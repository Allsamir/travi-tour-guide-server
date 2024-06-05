import User from "../models/users.js";

const verifyGuide = async (req, res, next) => {
  try {
    const { email } = req.user;
    const user = await User.findOne({ email: email });
    const isGuide = user.role === "guide";
    if (!isGuide) {
      return res.status(403).send({ message: "Forbidden Access" });
    }
    next();
  } catch (error) {
    console.error(error);
  }
};

export default verifyGuide;
