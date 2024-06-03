import mongoose from "mongoose";

const bookingsSchema = mongoose.Schema({
  email: String,
  name: String,
  photoURL: String,
  guide: String,
  price: Number,
  date: Date,
  status: String,
  packageID: mongoose.Types.ObjectId,
});

const Bookings = new mongoose.model("Booking", bookingsSchema);

export default Bookings;
