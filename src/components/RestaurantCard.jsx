import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/restaurants/${restaurant.id}`} className="restaurant-card">
      <div className="restaurant-img">
        <img src={restaurant.image} alt={restaurant.name} />
        <span>{restaurant.offer}</span>
      </div>

      <div className="restaurant-content">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.cuisine}</p>

        <div className="restaurant-meta">
          <span>⭐ {restaurant.rating}</span>
          <span>⏱ {restaurant.deliveryTime}</span>
        </div>

        <small>📍 {restaurant.location}</small>
      </div>
    </Link>
  );
};

export default RestaurantCard;
