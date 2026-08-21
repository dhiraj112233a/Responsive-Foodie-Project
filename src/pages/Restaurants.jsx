import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data/restaurantData";

function Restaurants() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("all");

  const filteredRestaurants = restaurants.filter((restaurant) => {

    const searchValue = search.toLowerCase().trim();

    // Check if user is searching a rating like 4.5+
    let ratingFromSearch = null;

    if (searchValue === "4.5") {
      ratingFromSearch = 4.5;
    } else if (searchValue === "4") {
      ratingFromSearch = 4;
    } else if (searchValue === "3.5") {
      ratingFromSearch = 3.5;
    } else if (searchValue === "3") {
      ratingFromSearch = 3;
    }

    // Normal restaurant/cuisine search
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(searchValue) ||
      restaurant.cuisine
        .toLowerCase()
        .includes(searchValue);

    // Dropdown rating filter
    const matchesDropdownRating = rating === "all" ||
      Number(restaurant.rating) >= Number(rating);

    // Typed rating search
    const matchesTypedRating = ratingFromSearch === null ||
      Number(restaurant.rating) >= ratingFromSearch;

    // If searching rating, ignore normal text search
    if (ratingFromSearch !== null) {
      return matchesTypedRating;
    }

    return matchesSearch && matchesDropdownRating;
  });

  return (
    <section className="page-section">

      <div className="container">

        <div className="page-header">
          <span>Top Restaurants</span>

          <h1>Restaurants Near You</h1>

          <p>
            Discover trusted restaurants with fast delivery.
          </p>
        </div>


        <div className="filter-row">

          <SearchBar
            value={search}
            onChange={setSearch}
            rating={rating}
            onRatingChange={setRating}
            placeholder="Search restaurants or cuisine..." />

        </div>


        <div className="restaurant-grid">

          {filteredRestaurants.length > 0 ? (

            filteredRestaurants.map((restaurant) => (

              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant} />

            ))

          ) : (

            <div className="no-results">

              <h2>😕 Oops No restaurants found</h2>

              <p>
                Please Try another restaurant, cuisine or rating.
              </p>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default Restaurants;