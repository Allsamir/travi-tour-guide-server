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

export const deleteBooking = async (req, res) => {
  try {
    const { id, email } = req.query;
    verifyUser(req.user.email, email);
    const deleteBooking = await Bookings.findByIdAndDelete({ _id: id });
    if (deleteBooking) {
      res.status(200).send({ success: true, message: "Your Booking Canceled" });
    }
  } catch (error) {
    console.error(error);
  }
};

export const getGuideAssignedTourists = async (req, res) => {
  try {
    const { name } = req.query;
    const assignedTourists = await Bookings.aggregate([
      { $match: { guide: name } },
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
    res.status(200).send(assignedTourists);
  } catch (error) {
    console.error(error);
  }
};

export const handleStatus = async (req, res) => {
  try {
    const { status, id } = req.query;
    let update = {};
    if (status === "Accept") {
      update.status = "Accepted";
    } else {
      update.status = "Rejected";
    }
    const updateBookingStatus = await Bookings.findByIdAndUpdate(
      { _id: id },
      update,
      { new: true },
    );
    if (updateBookingStatus)
      res.status(200).send({ success: true, message: `${update.status}` });
  } catch (error) {
    console.error(error);
  }
};
