const express = require("express");
const ParkingSpot = require("../models/ParkingSpot");

const router = express.Router();

// Get all parking spots
router.get("/", async (req, res) => {
  try {
    const spots = await ParkingSpot.find();
    res.json(spots);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch parking spots",
      error: error.message,
    });
  }
});

module.exports = router;