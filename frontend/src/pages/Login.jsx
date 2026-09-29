function Login({ goToSignup }) {
  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-icon">
          🅿️
        </div>

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Login to your ParkingSpot account
        </p>

        <form>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="signup-text">
          Don't have an account?
          <span onClick={goToSignup}> Sign up</span>
        </p>

      </div>

    </div>
  );
}

export default Login;