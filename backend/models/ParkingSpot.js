const mongoose = require("mongoose");

const parkingSpotSchema = new mongoose.Schema(
  {
    spotNumber: {
      type: String,
      required: true,
      unique: true,
    },

    location: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["available", "occupied", "reserved"],
      default: "available",
    },

    pricePerHour: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ParkingSpot", parkingSpotSchema);