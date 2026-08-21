const SearchBar = ({ value, onChange, placeholder = "Search food..." }) => {
  return (
    <div className="search-box">
      <span>🔍</span>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      
    </div>
  );
};

export default SearchBar;
