import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  };


  const handleSubmit = (event) => {

    event.preventDefault();

    if (!formData.email || !formData.password) {

      setMessage("Please fill in all fields.");

      return;
    }

    setMessage("Login successful! 🎉");

    setTimeout(() => {
      navigate("/");
    }, 1000);

  };


  return (

    <div className="auth-page">

      <div className="auth-container">

        <div className="auth-left">

          <div className="auth-logo">
            🍔
          </div>

          <h1>
            Welcome back!
          </h1>

          <p>
            Login to continue your delicious
            journey with Foodie.
          </p>

          <div className="auth-food">
            🍕 🍔 🍜 🍰
          </div>

        </div>


        <div className="auth-form-container">

          <h2>
            Login
          </h2>

          <p className="form-subtitle">
            Welcome back! Please enter your details.
          </p>


          {message && (
            <div className="message">
              {message}
            </div>
          )}


          <form onSubmit={handleSubmit}>

            <div className="input-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>


            <div className="input-group">

              <label>
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />

            </div>


            <div className="forgot-password">
              <a href="#">
                Forgot Password?
              </a>
            </div>


            <button
              type="submit"
              className="auth-btn"
            >
              Login
            </button>

          </form>


          <p className="account-text">

            Don't have an account?

            <Link to="/register">
              Create Account
            </Link>

          </p>

        </div>

      </div>

    </div>

  );
}

export default Login;