import User from "../models/users.js";

const verifyAdmin = async (req, res, next) => {
  try {
    const { email } = req.user;
    const user = await User.findOne({ email: email });
    const isAdmin = user.role === "admin";
    if (!isAdmin) {
      return res.status(403).send({ message: "Unauthorized Access" });
    }
    next();
  } catch (error) {
    console.error(error);
  }
};

export default verifyAdmin;
