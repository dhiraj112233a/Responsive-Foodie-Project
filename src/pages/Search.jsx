import { useState } from "react";
import { Link } from "react-router-dom";
import { foods, restaurants } from "../data/foodData";
import FoodCard from "../components/FoodCard";

function Search({ addToCart }) {

  const [search, setSearch] = useState("");

  const searchText = search.toLowerCase();

  const filteredFoods = foods.filter(
    (food) =>
      food.name.toLowerCase().includes(searchText) ||
      food.category.toLowerCase().includes(searchText) ||
      food.restaurant.toLowerCase().includes(searchText) ||
      food.type.toLowerCase().includes(searchText)
  );

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchText) ||
      restaurant.cuisine.toLowerCase().includes(searchText)
  );

  return (
    <div className="page">

      <div className="search-page">

        <h1>Search Food & Drinks 🔍</h1>

        <div className="large-search">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search food, drinks or restaurants..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            autoFocus
          />

          {search && (
            <button
              onClick={() => setSearch("")}
            >
              ✖
            </button>
          )}

        </div>

        {!search ? (
          <div className="search-placeholder">
            <div>🍕</div>

            <h2>
              What are you craving?
            </h2>

            <p>
              Search for your favorite food,
              drinks or restaurants.
            </p>
          </div>
        ) : (
          <>

            <h2 className="result-title">
              Search Results
            </h2>

            {filteredRestaurants.length > 0 && (
              <section className="search-section">

                <h3>Restaurants</h3>

                <div className="search-restaurants">

                  {filteredRestaurants.map(
                    (restaurant) => (
                      <Link
                        key={restaurant.id}
                        to={`/restaurants/${restaurant.id}`}
                        className="search-restaurant"
                      >
                        <img
                          src={restaurant.image}
                          alt={restaurant.name}
                        />

                        <div>
                          <h4>
                            {restaurant.name}
                          </h4>

                          <p>
                            {restaurant.cuisine}
                          </p>
                        </div>
                      </Link>
                    )
                  )}

                </div>

              </section>
            )}

            <section className="search-section">

              <h3>
                Food & Drinks ({filteredFoods.length})
              </h3>

              {filteredFoods.length > 0 ? (

                <div className="food-grid">

                  {filteredFoods.map((food) => (
                    <FoodCard
                      key={food.id}
                      food={food}
                      addToCart={addToCart}
                    />
                  ))}

                </div>

              ) : (
                <div className="no-results">
                  😔
                  <h3>
                    No food found
                  </h3>
                  <p>
                    Try searching something else.
                  </p>
                </div>
              )}

            </section>

          </>
        )}

      </div>

    </div>
  );
}

export default Search;