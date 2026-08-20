import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { foods } from "../data/foodData";
import { categories } from "../data/categoryData";
import FoodCard from "../components/FoodCard";
import SearchBar from "../components/SearchBar";

const CategoryMenu = () => {
  const { categoryId } = useParams();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const category = categories.find((item) => item.id === categoryId);

  const filteredFoods = useMemo(() => {
    let data = foods.filter((food) => food.category === categoryId);

    if (search) {
      data = data.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "low") {
      data = [...data].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      data = [...data].sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      data = [...data].sort((a, b) => b.rating - a.rating);
    }

    return data;
  }, [categoryId, search, sort]);

  if (!category) {
    return (
      <section className="page-section">
        <div className="container empty-state">
          <h2>Category not found</h2>
          <Link to="/categories" className="primary-btn">
            Back to Categories
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="menu-banner">
          <img src={category.image} alt={category.name} />
          <div>
            <span>Fresh & Delicious</span>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
          </div>
        </div>

        <div className="filter-row">
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder={`Search ${category.name}...`}
          />

          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="default">Sort By</option>
            <option value="low">Price Low to High</option>
            <option value="high">Price High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="food-grid">
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food) => <FoodCard key={food.id} food={food} />)
          ) : (
            <div className="empty-state">
              <h2>No food found</h2>
              <p>Try another search keyword.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryMenu;
