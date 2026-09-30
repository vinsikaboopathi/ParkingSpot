const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "ParkingSpot Backend is running 🚗🅿️",
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully ✅");
  })
  .catch((err) => {
    console.log("MongoDB connection failed ❌");
    console.log(err.message);
  });

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`ParkingSpot backend running on http://localhost:${PORT}`);
});