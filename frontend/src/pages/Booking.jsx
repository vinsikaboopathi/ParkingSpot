import { useState } from "react";

function Booking({ parking, goBack }) {
  const [confirmed, setConfirmed] = useState(false);

  const [bookingData, setBookingData] = useState({
    date: "",
    time: "",
    vehicle: "",
  });

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (
      !bookingData.date ||
      !bookingData.time ||
      !bookingData.vehicle
    ) {
      alert("Please fill all details");
      return;
    }

    setConfirmed(true);
  };

  // CONFIRMED BOOKING SCREEN
  if (confirmed) {
    return (
      <div className="booking-page">

        <div className="booking-card">

          <div
            className="login-icon"
            style={{
              background:
                "linear-gradient(135deg, #16a34a, #22c55e)",
            }}
          >
            ✓
          </div>

          <h1>Booking Confirmed!</h1>

          <p className="login-subtitle">
            Your parking slot has been successfully reserved.
          </p>

          {/* Booking Details */}
          <div className="booking-info">

            <h2>
              {parking?.name || "City Center Parking"}
            </h2>

            <p>
              📍 {parking?.location || "Salem Main Road"}
            </p>

            <p>
              📅 {bookingData.date}
            </p>

            <p>
              🕐 {bookingData.time}
            </p>

            <p>
              🚗 {bookingData.vehicle}
            </p>

            <p>
              💰 ₹{parking?.price || 30} / hour
            </p>

          </div>


          {/* Booking ID */}
          <div
            style={{
              textAlign: "center",
              margin: "20px 0",
            }}
          >

            <p
              style={{
                color: "#94a3b8",
                fontSize: "13px",
              }}
            >
              BOOKING ID
            </p>

            <h2
              style={{
                color: "#38bdf8",
                letterSpacing: "2px",
              }}
            >
              PS2026{Math.floor(Math.random() * 9000 + 1000)}
            </h2>

          </div>


          {/* Demo QR */}
          <div
            style={{
              width: "150px",
              height: "150px",
              margin: "20px auto",
              padding: "10px",
              background: "white",
              borderRadius: "12px",
              display: "grid",
              gridTemplateColumns: "repeat(9, 1fr)",
              gap: "2px",
            }}
          >

            {[
              1,1,1,1,1,0,1,1,1,
              1,0,0,0,1,0,1,0,1,
              1,0,1,0,1,1,1,0,1,
              1,0,0,0,1,0,1,0,1,
              1,1,1,1,1,0,1,1,1,
              0,0,1,0,1,1,0,1,0,
              1,1,0,1,0,0,1,1,1,
              1,0,1,1,1,0,0,1,0,
              1,1,1,0,1,1,1,0,1,
            ].map((cell, index) => (
              <div
                key={index}
                style={{
                  background: cell ? "#000" : "#fff",
                }}
              />
            ))}

          </div>

          <p
            style={{
              textAlign: "center",
              color: "#94a3b8",
              fontSize: "13px",
            }}
          >
            Show this QR code at the parking entrance
          </p>


          <button
            className="back-btn"
            onClick={goBack}
          >
            ← Back to Parking
          </button>

        </div>

      </div>
    );
  }


  // BOOKING FORM
  return (
    <div className="booking-page">

      <div className="booking-card">

        <div className="login-icon">
          🅿️
        </div>

        <h1>
          Reserve Your Slot
        </h1>

        <p className="login-subtitle">
          Book your parking space easily
        </p>


        {/* Parking Details */}
        <div className="booking-info">

          <h2>
            {parking?.name || "City Center Parking"}
          </h2>

          <p>
            📍 {parking?.location || "Salem Main Road"}
          </p>

          <p>
            🅿️ {parking?.available || 12} slots available
          </p>

          <p>
            💰 ₹{parking?.price || 30} / hour
          </p>

        </div>


        {/* Booking Form */}
        <form onSubmit={handleBooking}>

          <label>
            Date
          </label>

          <input
            type="date"
            name="date"
            value={bookingData.date}
            onChange={handleChange}
          />


          <label>
            Time
          </label>

          <input
            type="time"
            name="time"
            value={bookingData.time}
            onChange={handleChange}
          />


          <label>
            Vehicle Number
          </label>

          <input
            type="text"
            name="vehicle"
            placeholder="Enter vehicle number"
            value={bookingData.vehicle}
            onChange={handleChange}
          />


          <button type="submit">
            Confirm Booking
          </button>

        </form>


        <button
          className="back-btn"
          onClick={goBack}
        >
          ← Back to Parking
        </button>

      </div>

    </div>
  );
}

export default Booking;