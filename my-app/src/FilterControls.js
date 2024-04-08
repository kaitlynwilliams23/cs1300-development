function FilterControls({ filters, onFilterChange }) {
    const handleFilterChange = (event) => {
      const { name, value } = event.target;
      onFilterChange(name, value);
    };
  
    return (
      <div>
        <h2>Filter by:</h2>
        <label>
          Type:
          <select name="type" value={filters.type} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="shirt">Shirt</option>
            <option value="pants">Pants</option>
            <option value="sweatshirt">Sweatshirts</option>
            <option value="dress">Dresses</option>
        </select>
        </label>
        <label>
          Color:
          <select name="color" value={filters.color} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="red">Red</option>
            <option value="white">White</option>
            <option value="green">Green</option>
            <option value="black">Black</option>
            
          </select>
        </label>
      </div>
    );
  }
  
  export default FilterControls;