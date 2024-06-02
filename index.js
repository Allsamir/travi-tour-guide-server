import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";
const app = express();
import appRouter from "./routes/index.js";
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);
app.use(express.json());
app.use("/api", appRouter);
app.get("/", (req, res) => {
  res.send("Hello From Assignment-12 Server");
});
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server is Running and Connected to Database"),
    );
  })
  .catch((err) => {
    console.error(err);
    throw new Error("MongoDB Error");
  });
