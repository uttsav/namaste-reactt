const Search = () => {
  return (
    <>
      <button
        className="filter-btn"
        onClick={() => {
          filterRestuarant();
        }}
      >
        Top Rated Restaurant
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          resetFilter();
        }}
      >
        Reset Filter
      </button>
    </>
  );
};

export default Search;
