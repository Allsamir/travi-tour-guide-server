import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).send({ message: "Unauthorized Access" });
    }
    jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
      if (err) {
        return res.status(401).send({ message: "Unauthorized Access" });
      }
      req.user = decoded;
      next();
    });
  } catch (error) {
    console.error(error);
  }
};

export default verifyToken;
