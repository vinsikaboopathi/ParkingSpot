require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("ParkingSpot Backend Running!");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});