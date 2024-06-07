import verifyUser from "../middlewares/verifyUser.js";
import Bookings from "../models/bookings.js";

export const getUsersBookigs = async (req, res) => {
  try {
    const { email } = req.query;
    verifyUser(req.user.email, email);
    const bookings = await Bookings.aggregate([
      { $match: { email: email } },
      {
        $lookup: {
          from: "packages",
          localField: "packageID",
          foreignField: "_id",
          as: "packageDetails",
        },
      },
      {
        $unwind: "$packageDetails",
      },
    ]);
    console.log(bookings);
    res.status(200).send(bookings);
  } catch (error) {
    console.error(error);
  }
};

export const createNewBookings = async (req, res) => {
  try {
    const { email, name, photoURL, price, date, guide, status, packageID } =
      req.body;
    verifyUser(req.user.email, email);
    const newBooking = new Bookings({
      email,
      name,
      photoURL,
      price,
      date,
      guide,
      status,
      packageID,
    });
    await newBooking.save().then(() => console.log("Booking done"));
    res
      .status(201)
      .send({ success: true, message: "Successfully Booking Done" });
  } catch (error) {
    console.error(error);
  }
};
