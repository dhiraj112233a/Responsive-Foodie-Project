import { Link } from "react-router-dom";
import foodieImg from "../assets/foodie.png";
import { categories } from "../data/categoryData";
import { foods } from "../data/foodData";
import { restaurants } from "../data/restaurantData";
import CategoryCard from "../components/CategoryCard";
import FoodCard from "../components/FoodCard";
import RestaurantCard from "../components/RestaurantCard";

const Home = () => {
  const popularFoods = foods.filter((food) => food.rating >= 4.7).slice(0, 6);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="tagline">Fast Delivery • Fresh Food</span>
            <h1>
              Order your favourite <span>food</span> anytime
            </h1>
            <p>
              Explore delicious meals, popular restaurants and mouth-watering
              dishes delivered right to your doorstep.
            </p>

            <div className="hero-actions">
              <Link to="/categories" className="primary-btn">
                Order Now
              </Link>
              <Link to="/restaurants" className="secondary-btn">
                Explore Restaurants
              </Link>
            </div>
          </div>

          <div className="hero-image">
            <img src={foodieImg} alt="Foodie" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span>Choose Category</span>
              <h2>Popular Categories</h2>
            </div>
            <Link to="/categories">View All →</Link>
          </div>

          <div className="category-grid">
            {categories.slice(0, 4).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <div>
              <span>Top Picks</span>
              <h2>Popular Food</h2>
            </div>
            <Link to="/categories">See Menu →</Link>
          </div>

          <div className="food-grid">
            {popularFoods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span>Near You</span>
              <h2>Featured Restaurants</h2>
            </div>
            <Link to="/restaurants">View All →</Link>
          </div>

          <div className="restaurant-grid">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
