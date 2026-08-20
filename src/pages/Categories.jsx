import CategoryCard from "../components/CategoryCard";
import { categories } from "../data/categoryData";

const Categories = () => {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header">
          <span>Explore Menu</span>
          <h1>Food Categories</h1>
          <p>Find your favourite food by category.</p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
