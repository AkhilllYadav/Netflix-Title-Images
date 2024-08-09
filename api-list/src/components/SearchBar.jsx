import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-bar">
     <img
    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
    alt="Netflix Logo"
    className="netflix-logo"
  />
  <h1>Unlimited wallpapers of movies, TV shows and more</h1>
  <h2>Download your favourite.</h2>
  <p>Ready to download? Enter name of movies, TV shows and more.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
