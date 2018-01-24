import React, { Component } from "react";
import "../styles/Search.css";
import DistrictRepository from "../helper";
import kinderData from "../data/kindergartners_in_full_day_program.js";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    };
  }

  render() {
    return (
      <header>
        <form>
          <label htmlFor="search-input">Search for your school district</label>
          <input id="search-input" type="text"/>
          <button className='search-button'>Submit</button>    
        </form>
      </header>
    )
  }
}

export default Search;