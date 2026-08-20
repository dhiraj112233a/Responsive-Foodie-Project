import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const { cartCount } = useCart();

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={logo} alt="Foodie" />
          <span>Foodie</span>
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${open ? "active" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/categories" onClick={closeMenu}>
            Categories
          </NavLink>
          <NavLink to="/restaurants" onClick={closeMenu}>
            Restaurants
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <NavLink to="/cart" className="cart-link" onClick={closeMenu}>
            🛒 Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </NavLink>

          {isAuthenticated ? (
            <div className="nav-user">
              <Link to="/profile" onClick={closeMenu}>
                Hi, {user.name.split(" ")[0]}
              </Link>
              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="logout-btn"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="nav-login" onClick={closeMenu}>
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
