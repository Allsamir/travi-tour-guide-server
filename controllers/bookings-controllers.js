import Bookings from "../models/bookings.js";

export const createNewBookings = async (req, res) => {
  try {
    const { email, name, photoURL, price, date, guide, status, packageID } =
      req.body;
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
