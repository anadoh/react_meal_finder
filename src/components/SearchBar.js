import React, { useState } from "react";

const SearchBar = ({ handleSearch, randomMeal }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.elements.search.value) {
      handleSearch(event.target.elements.search.value);
    }
  };

  return (
    <div className="flex">
      <form className="flex" id="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="Search for meals or keywords"
          value={search}
          onChange={handleChange}
        />
        <button className="search-btn" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <button
        onClick={() => {
          randomMeal();
          setSearch("");
        }}
        className="random-btn"
        id="random"
      >
        <i className="fas fa-random"></i>
      </button>
    </div>
  );
};

export default SearchBar;
