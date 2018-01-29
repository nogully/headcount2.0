import React, { Component } from 'react';
import '../styles/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    };
  }

  handleInput = event => {
    event.preventDefault();
    this.setState({
      display: event.target.value
    });
    this.props.searchDistrict(event.target.value);
  };

  handleButtonClick = event => {
    event.preventDefault();
    this.setState({ display: '' });
    this.props.searchDistrict('');
  };

  render() {
    return (
      <header>
        <h5>
          Click two Colorado school districts to compare their full-day kindergarten participation rates
        </h5>
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
          <button className="clear-button" onClick={this.handleButtonClick}>
            Clear
          </button>
        </form>
      </header>
    );
  }
}

export default Search;
