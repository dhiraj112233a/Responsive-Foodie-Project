const PrivacyPolicy = () => {
  return (
    <section className="page-section">
      <div className="container legal-page">
        <h1>Privacy Policy</h1>

        <p>
          At Foodie, we respect your privacy. This demo application stores user
          details, cart items and orders in your browser localStorage.
        </p>

        <h2>Information We Store</h2>
        <p>
          We may store your name, email, phone number, address, cart data and
          order history locally for app functionality.
        </p>

        <h2>Data Security</h2>
        <p>
          Since this is a frontend demo project, no real payment or sensitive
          banking data is processed.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy-related questions, contact us at support@foodie.com.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
