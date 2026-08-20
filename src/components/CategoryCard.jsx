import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/categories/${category.id}`} className="category-card">
      <img src={category.image} alt={category.name} />
      <div className="category-overlay">
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <span>{category.items} items →</span>
      </div>
    </Link>
  );
};

export default CategoryCard;
