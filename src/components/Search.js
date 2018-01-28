import React, { Component } from 'react';
import '../styles/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    };
  }

  handleInput = e => {
    e.preventDefault();
    this.setState({
      display: e.target.value
    });
    this.props.searchDistrict(e.target.value);
  };

  handleButtonClick = e => {
    e.preventDefault();
    this.props.searchDistrict(this.state.display);
  };

  render() {
    return (
      <header>
        <form>
          <label htmlFor="search-input">
            Search for your school district:{' '}
          </label>
          <input
            id="search-input"
            type="text"
            value={this.state.display}
            onChange={this.handleInput}
          />
          <button className="search-button" onClick={this.handleButtonClick}>
            Submit
          </button>
        </form>
      </header>
    );
  }
}

export default Search;
