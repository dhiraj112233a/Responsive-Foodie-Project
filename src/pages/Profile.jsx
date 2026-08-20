import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, updateProfile } = useAuth();

  const [form, setForm] = useState({
    name: user.name || "",
    phone: user.phone || "",
    address: user.address || ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(form);
    alert("Profile updated successfully.");
  };

  return (
    <section className="page-section">
      <div className="container profile-layout">
        <div className="profile-card">
          <div className="profile-avatar">{user.name.charAt(0)}</div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>

          <Link to="/orders" className="secondary-btn full">
            My Orders
          </Link>
        </div>

        <div className="card-box">
          <h2>Edit Profile</h2>

          <form onSubmit={handleSubmit} className="profile-form">
            <label>Name</label>
            <input
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value
                })
              }
            />

            <label>Phone</label>
            <input
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value
                })
              }
            />

            <label>Address</label>
            <textarea
              value={form.address}
              onChange={(e) =>
                setForm({
                  ...form,
                  address: e.target.value
                })
              }
            />

            <button className="primary-btn">Save Changes</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
