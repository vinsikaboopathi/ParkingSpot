import { useState } from "react";

function Signup({ goToLogin }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Account created successfully! 🎉");
        setTimeout(() => {
          goToLogin();
        }, 1000);
      } else {
        setMessage(data.message || "Signup failed");
      }
    } catch (error) {
      setMessage("Backend server is not running.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">🅿️</div>

        <h1>Create Account</h1>

        <p className="login-subtitle">
          Create your ParkingSpot account
        </p>

        <form onSubmit={handleSignup}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Create Account
          </button>
        </form>

        {message && (
          <p style={{ marginTop: "15px", color: "#38bdf8" }}>
            {message}
          </p>
        )}

        <p className="signup-text">
          Already have an account?
          <span onClick={goToLogin}> Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;