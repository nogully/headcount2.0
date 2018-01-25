import React, { Component } from "react";
import "./styles/App.css";
import DistrictRepository from "./helper";
import kinderData from "./data/kindergartners_in_full_day_program.js";
import CardContainer from "./components/CardContainer";
import Search from "./components/Search";

const kinderGardenData = new DistrictRepository(kinderData);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selected: []
    };
  }

  componentDidMount = () => {
    const allData = kinderGardenData.findAllMatches();
    this.setState({ data: allData })
  }

  searchDistrict = (string) => {
    let foundDistrict = kinderGardenData.findAllMatches(string);
    this.setState({data: foundDistrict});
  }

  clickCard = (string) => {
    console.log(string);
    // set card into this.state.selected
  };

  render() {
    return (
      <div className="App">
        <h1>Headcount 2.0</h1>
        <Search searchDistrict={this.searchDistrict}/>
        <CardContainer data={this.state.data} clickCard={this.clickCard} selected={this.state.selected} />
      </div>
    );
  }
}

export default App;
