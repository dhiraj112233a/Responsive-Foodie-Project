import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data/restaurantData";

const Restaurants = () => {
  const [search, setSearch] = useState("");

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header">
          <span>Top Restaurants</span>
          <h1>Restaurants Near You</h1>
          <p>Discover trusted restaurants with fast delivery.</p>
        </div>

        <div className="filter-row">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search restaurants or cuisine..."
          />
        </div>

        <div className="restaurant-grid">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Restaurants;
