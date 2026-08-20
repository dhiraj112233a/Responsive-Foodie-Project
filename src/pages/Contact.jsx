import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="page-section">
      <div className="container contact-layout">
        <div className="content-page">
          <span>Contact Us</span>
          <h1>Need help? We are here for you.</h1>
          <p>
            Have questions about orders, restaurants or delivery? Send us a
            message.
          </p>

          <div className="contact-info">
            <p>📞 +91 70574 91939</p>
            <p>✉ support@foodie.com</p>
            <p>📍 Pune , India</p>
          </div>
        </div>

        <form className="contact-form card-box" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            placeholder="Your name"
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
            placeholder="Your email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value
              })
            }
          />

          <label>Message</label>
          <textarea
            placeholder="Write your message"
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value
              })
            }
          />

          <button className="primary-btn full">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
