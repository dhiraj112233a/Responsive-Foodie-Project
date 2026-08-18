import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          🍔 Foodie
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <a href="/#categories" onClick={() => setMenuOpen(false)}>
            Categories
          </a>

          <a href="/#popular" onClick={() => setMenuOpen(false)}>
            Popular
          </a>

          <NavLink to="/login" onClick={() => setMenuOpen(false)}>
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="register-btn"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
