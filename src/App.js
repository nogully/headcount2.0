import React, { Component } from "react";
import "./styles/App.css";
import DistrictRepository from "./helper";
import kinderData from "./data/kindergartners_in_full_day_program.js";
import CardContainer from "./components/CardContainer";
import Search from "./components/Search";

const kinderGardenData = new DistrictRepository(kinderData);
const allData = kinderGardenData.findAllMatches();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: allData
    };
  }

  searchDistrict = (string) => {
    let foundDistrict = kinderGardenData.findByName(string);
    //need to set state so that we can hand new state to card container and display the right cards
    return foundDistrict;
  }

  render() {
    return (
      <div className="App">
        <h1>Headcount 2.0</h1>
        <Search searchDistrict={this.searchDistrict}/>
        <CardContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
