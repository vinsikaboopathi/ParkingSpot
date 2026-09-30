const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "ParkingSpot Backend is running 🚗🅿️",
  });
});

// MongoDB connection
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully ✅");
  })
  .catch((error) => {
    console.log("MongoDB connection failed ❌");
    console.log(error.message);
  });

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`ParkingSpot backend running on http://localhost:${PORT}`);
});