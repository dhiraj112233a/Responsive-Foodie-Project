import { Link } from "react-router-dom";

function Welcome() {

  return (
    <div className="welcome-page">

      <div className="welcome-content">

        <div className="welcome-logo">
          🍔
        </div>

        <h1>
          Welcome to <span>Foodie</span>
        </h1>

        <p>
          Discover delicious food and refreshing
          drinks from your favorite restaurants.
        </p>

        <div className="welcome-buttons">

          <Link
            to="/login"
            className="welcome-login"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="welcome-register"
          >
            Sign Up
          </Link>

        </div>

        <Link
          to="/home"
          className="guest-link"
        >
          Continue as Guest →
        </Link>

      </div>

      <div className="welcome-food">
        🍕 🍔 🍜 🍛 ☕ 🍰
      </div>

    </div>
  );
}

export default Welcome;