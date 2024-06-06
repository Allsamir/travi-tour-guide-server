const verifyUser = (rEmail, qEmail) => {
  if (rEmail !== qEmail) {
    return res.status(403).send({ message: "Forbidden Access" });
  }
};

export default verifyUser;
