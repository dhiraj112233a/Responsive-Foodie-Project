import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="page-section">
      <div className="container empty-state">
        <div className="empty-icon">🍽️</div>
        <h1>404</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="primary-btn">
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
