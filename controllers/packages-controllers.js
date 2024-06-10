import Package from "../models/packages.js";

export const singlePackage = async (req, res) => {
  try {
    const { id } = req.query;
    const singlePackage = await Package.findOne({ _id: id });
    res.status(200).send(singlePackage);
  } catch (error) {
    console.error(error);
  }
};

export const getAllThePackes = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skip = (page - 1) * limit;
    const packages = await Package.find({}).skip(skip).limit(limit);
    const totalPackages = await Package.countDocuments();
    res.status(200).json({ packages, hasMore: skip + limit < totalPackages });
  } catch (error) {
    console.error(error);
  }
};

export const getPackagesBasedOnType = async (req, res) => {
  try {
    const { type } = req.query;
    const packages = await Package.find({ tourType: type });
    res.status(200).send(packages);
  } catch (error) {
    console.error(error);
  }
};

export const createAPackage = async (req, res) => {
  try {
    const newPackage = new Package(req.body);
    await newPackage.save().then(() => console.log("Package Created"));
    res
      .status(200)
      .send({ success: true, message: "Package created successfully" });
  } catch (error) {
    console.error(error);
  }
};

export const getWishList = async (req, res) => {
  try {
    const { wishList } = req.body;
    const getWishListPackages = await Package.find({ _id: { $in: wishList } });
    res.status(200).send(getWishListPackages);
  } catch (error) {
    console.error(error);
  }
};
