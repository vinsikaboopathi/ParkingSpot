require("dotenv").config();

const connectDB = require("./config/db");
const ParkingSpot = require("./models/ParkingSpot");

const seed = async () => {
  try {
    await connectDB();

    await ParkingSpot.deleteMany({});

    await ParkingSpot.insertMany([
      {
        spotNumber: "A1",
        location: "Ground Floor",
        pricePerHour: 30,
      },
      {
        spotNumber: "A2",
        location: "Ground Floor",
        pricePerHour: 30,
      },
      {
        spotNumber: "B1",
        location: "First Floor",
        pricePerHour: 40,
      },
      {
        spotNumber: "B2",
        location: "First Floor",
        pricePerHour: 40,
      },
    ]);

    console.log("Sample parking spots inserted successfully");
  } catch (error) {
    console.error("Seed failed:", error.message);
  } finally {
    process.exit();
  }
};

seed();