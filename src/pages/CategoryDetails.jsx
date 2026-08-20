import { useParams } from "react-router-dom";
import { foods } from "../data/foodData";
import FoodCard from "../components/FoodCard";

function CategoryDetails({ addToCart }) {

  const { category } = useParams();

  const categoryFoods = foods.filter(
    (food) =>
      food.category.toLowerCase() ===
      category.toLowerCase()
  );

  return (
    <div className="page">

      <div className="page-container">

        <h1 className="page-title">
          {category} 🍽️
        </h1>

        <p className="page-subtitle">
          Delicious {category} available near you.
        </p>

        {categoryFoods.length > 0 ? (

          <div className="food-grid">

            {categoryFoods.map((food) => (
              <FoodCard
                key={food.id}
                food={food}
                addToCart={addToCart}
              />
            ))}

          </div>

        ) : (
          <div className="no-results">
            No items available.
          </div>
        )}

      </div>

    </div>
  );
}

export default CategoryDetails;