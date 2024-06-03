import Package from "../models/packages.js";

export const getlimitedPackages = async (req, res) => {
  try {
    const packages = await Package.find().limit(3);
    res.status(200).send(packages);
  } catch (error) {
    console.log(error);
  }
};

export const singlePackage = async (req, res) => {
  try {
    const { id } = req.query;
    const singlePackage = await Package.findOne({ _id: id });
    res.status(200).send(singlePackage);
  } catch (error) {
    console.error(error);
  }
};
