const SearchBar = ({
  value,
  onChange,
  rating,
  onRatingChange,
  placeholder = "Search food..."
}) => {

  return (
    <div className="search-container">

      {/* Search */}
      <div className="search-box">

        <span>🔍</span>

        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) =>
            onChange(e.target.value)
          }
        />

      </div>


      {/* Rating Filter */}
      <div className="rating-filter">

        <select
          value={rating}
          onChange={(e) =>
            onRatingChange(e.target.value)
          }
        >

          <option value="all">
            ⭐ All Ratings
          </option>

          <option value="4.5">
            ⭐ 4.5+
          </option>

          <option value="4">
            ⭐ 4.0+
          </option>

          <option value="3.5">
            ⭐ 3.5+
          </option>

          <option value="3">
            ⭐ 3.0+
          </option>

        </select>

      </div>

    </div>
  );
};

export default SearchBar;