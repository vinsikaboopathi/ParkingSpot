import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Parking from "./pages/Parking";
import Booking from "./pages/Booking";

function App() {
  const [page, setPage] = useState("home");
  const [selectedParking, setSelectedParking] = useState(null);

  // Login page
  if (page === "login") {
    return (
      <Login
        goToSignup={() => setPage("signup")}
      />
    );
  }

  // Signup page
  if (page === "signup") {
    return (
      <Signup
        goToLogin={() => setPage("login")}
      />
    );
  }

  // Parking search page
  if (page === "parking") {
    return (
      <Parking
        goToBooking={(parking) => {
          setSelectedParking(parking);
          setPage("booking");
        }}
      />
    );
  }

  // Booking page
  if (page === "booking") {
    return (
      <Booking
        parking={selectedParking}
        goBack={() => setPage("parking")}
      />
    );
  }

  // Home page
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          🅿️ ParkingSpot
        </div>

        <div className="nav-links">

          <button
            className="nav-home-btn"
            onClick={() => setPage("home")}
          >
            Home
          </button>

          <button
            className="nav-parking-btn"
            onClick={() => setPage("parking")}
          >
            Find Parking
          </button>

          <a href="#about">
            About
          </a>

          <button
            className="login-btn"
            onClick={() => setPage("login")}
          >
            Login
          </button>

        </div>

      </nav>


      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="tagline">
            SMART PARKING • EASY BOOKING
          </p>

          <h1>
            Find Your Parking
            <br />
            <span>Spot Easily.</span>
          </h1>

          <p className="description">
            Find available parking spaces near you,
            check slot availability, and reserve your
            parking spot in seconds.
          </p>


          {/* Search Box */}
          <div className="search-box">

            <input
              type="text"
              placeholder="Enter location or parking area"
            />

            <button
              onClick={() => setPage("parking")}
            >
              🔍 Find Parking
            </button>

          </div>

        </div>


        {/* Parking Card */}
        <div className="parking-card">

          <div className="card-icon">
            🅿️
          </div>

          <h2>
            Parking Made Simple
          </h2>

          <p>
            Search • Reserve • Park
          </p>

          <div className="slot-status">

            <div>
              <strong>24</strong>
              <span>Available</span>
            </div>

            <div>
              <strong>40</strong>
              <span>Total Slots</span>
            </div>

          </div>

        </div>

      </section>


      {/* Features Section */}
      <section
        className="features"
        id="about"
      >

        <h2>
          Why ParkingSpot?
        </h2>

        <div className="feature-container">

          <div className="feature-card">

            <div>📍</div>

            <h3>
              Find Nearby
            </h3>

            <p>
              Search for parking spaces
              near your location.
            </p>

          </div>


          <div className="feature-card">

            <div>🅿️</div>

            <h3>
              Live Availability
            </h3>

            <p>
              Check available parking slots
              before you arrive.
            </p>

          </div>


          <div className="feature-card">

            <div>📱</div>

            <h3>
              Easy Booking
            </h3>

            <p>
              Reserve your parking slot
              quickly and easily.
            </p>

          </div>


          <div className="feature-card">

            <div>🔐</div>

            <h3>
              QR Verification
            </h3>

            <p>
              Use your booking QR code
              for easy verification.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default App;