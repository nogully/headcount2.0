import React from 'react';
import '../styles/Search.css';
import PropTypes from 'prop-types';

const Search = props => {
  return (
    <header>
      <h5>
        Click two Colorado school districts to compare their full-day
        kindergarten participation rates
      </h5>
      <form>
        <label htmlFor="search-input">Search for your school district: </label>
        <input
          id="search-input"
          type="text"
          onChange={event => props.searchDistrict(event.target.value)}
          onKeyPress={event => {
            if (event.key === 'Enter') event.preventDefault();
          }}
        />
        <button
          className="clear-button"
          onClick={event => props.handleButtonClick}
        >
          Clear All
        </button>
      </form>
    </header>
  );
};

Search.propTypes = {
  searchDistrict: PropTypes.func.isRequired,
  handleButtonClick: PropTypes.func.isRequired
};

export default Search;
