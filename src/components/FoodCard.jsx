import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/priceHelper";

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();

  return (
    <div className="food-card">
      <div className="food-img-wrap">
        <img src={food.image} alt={food.name} />
        <span className={`food-type ${food.type === "veg" ? "veg" : "nonveg"}`}>
          {food.type === "veg" ? "● Veg" : "● Non-Veg"}
        </span>
      </div>

      <div className="food-info">
        <div className="food-title-row">
          <h3>{food.name}</h3>
          <span className="rating">⭐ {food.rating}</span>
        </div>

        <p>{food.description}</p>

        <div className="food-bottom">
          <strong>{formatPrice(food.price)}</strong>
          <button onClick={() => addToCart(food)}>Add +</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
