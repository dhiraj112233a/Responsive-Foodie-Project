import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { isValidEmail, isValidPassword } from "../utils/validation";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(form.email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (!isValidPassword(form.password)) {
      alert("Password must be at least 6 characters.");
      return;
    }

    const result = login(form);

    if (!result.success) {
      alert(result.message);
      return;
    }

    navigate("/");
  };

  return (
    <section className="auth-section">
      <div className="auth-card">
        <span>Welcome Back</span>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
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
            placeholder="Enter password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value
              })
            }
          />

          <button className="primary-btn full">Login</button>
        </form>

        <p>
          New to Foodie? <Link to="/register">Create account</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
