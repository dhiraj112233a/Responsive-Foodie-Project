import { useParams, Link } from "react-router-dom";
import { restaurants } from "../data/restaurantData";
import { foods } from "../data/foodData";
import FoodCard from "../components/FoodCard";

const RestaurantDetails = () => {
  const { id } = useParams();

  const restaurant = restaurants.find((item) => item.id === id);
  const menu = foods.filter((food) => food.restaurantId === id);

  if (!restaurant) {
    return (
      <section className="page-section">
        <div className="container empty-state">
          <h2>Restaurant not found</h2>
          <Link to="/restaurants" className="primary-btn">
            Back to Restaurants
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="restaurant-hero">
          <img src={restaurant.image} alt={restaurant.name} />

          <div className="restaurant-hero-content">
            <span>{restaurant.offer}</span>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.description}</p>

            <div className="restaurant-stats">
              <strong>⭐ {restaurant.rating}</strong>
              <strong>⏱ {restaurant.deliveryTime}</strong>
              <strong>📍 {restaurant.location}</strong>
            </div>
          </div>
        </div>

        <div className="section-heading compact">
          <div>
            <span>Restaurant Menu</span>
            <h2>Recommended Dishes</h2>
          </div>
        </div>

        <div className="food-grid">
          {menu.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantDetails;
