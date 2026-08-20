import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  isRequired,
  isValidEmail,
  isValidPassword
} from "../utils/validation";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isRequired(form.name)) {
      alert("Please enter your name.");
      return;
    }

    if (!isValidEmail(form.email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (!isValidPassword(form.password)) {
      alert("Password must be at least 6 characters.");
      return;
    }

    const result = register(form);

    if (!result.success) {
      alert(result.message);
      return;
    }

    navigate("/");
  };

  return (
    <section className="auth-section">
      <div className="auth-card">
        <span>Join Foodie</span>
        <h1>Create Account</h1>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value
              })
            }
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value
              })
            }
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value
              })
            }
          />

          <button className="primary-btn full">Register</button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
