import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
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


    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.password ||
      !formData.confirmPassword
    ) {

      setMessage("Please fill in all fields.");

      return;
    }


    if (formData.mobile.length !== 10) {

      setMessage("Mobile number must contain 10 digits.");

      return;
    }


    if (formData.password !== formData.confirmPassword) {

      setMessage("Passwords do not match.");

      return;
    }


    setMessage("Registration successful! 🎉");

    setTimeout(() => {

      navigate("/login");

    }, 1200);

  };


  return (

    <div className="auth-page">

      <div className="auth-container register-container">


        <div className="auth-left">

          <div className="auth-logo">
            🍔
          </div>

          <h1>
            Join Foodie!
          </h1>

          <p>
            Create an account and discover
            delicious food around you.
          </p>

          <div className="auth-food">
            🍕 🍔 🍜 🍰
          </div>

        </div>


        <div className="auth-form-container">

          <h2>
            Create Account
          </h2>

          <p className="form-subtitle">
            Fill in your details to get started.
          </p>


          {message && (

            <div className="message">
              {message}
            </div>

          )}


          <form onSubmit={handleSubmit}>


            <div className="input-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />

            </div>


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
                Mobile Number
              </label>

              <input
                type="tel"
                name="mobile"
                placeholder="Enter 10 digit mobile number"
                maxLength="10"
                value={formData.mobile}
                onChange={(event) => {

                  const value = event.target.value.replace(
                    /\D/g,
                    ""
                  );

                  setFormData({
                    ...formData,
                    mobile: value,
                  });

                }}
              />

            </div>


            <div className="input-group">

              <label>
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
              />

            </div>


            <div className="input-group">

              <label>
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

            </div>


            <button
              type="submit"
              className="auth-btn"
            >
              Create Account
            </button>


          </form>


          <p className="account-text">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>

  );
}

export default Register;