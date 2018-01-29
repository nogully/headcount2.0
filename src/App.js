import React, { Component } from 'react';
import './styles/App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import CardContainer from './components/CardContainer';
import Search from './components/Search';
import Comparison from './components/Comparison';

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
    this.setState({ data: allData });
  };

  searchDistrict = string => {
    let foundDistrict = kinderGardenData.findAllMatches(string);
    this.setState({ data: foundDistrict });
  };

  handleButtonClick = event => {
    event.preventDefault();
    const allData = kinderGardenData.findAllMatches();
    this.setState({ selected: [] });
    this.setState({ data: allData });
  };

  clickCard = string => {
    const clickedDistrict = kinderGardenData.findByName(string);

    if (
      this.state.selected.length < 2 &&
      !this.state.selected.includes(clickedDistrict)
    ) {
      const selected = [...this.state.selected, clickedDistrict];

      this.setState({ selected });
    } else if (!this.state.selected.includes(clickedDistrict)) {
      const district = [...this.state.selected].pop();
      const selected = [district, clickedDistrict];

      this.setState({ selected });
    } else {
      const remaining = this.state.selected.filter(
        district => clickedDistrict.location !== district.location
      );
      const selected = [...remaining];

      this.setState({ selected });
    }
  };

  getComparison = (dist1, dist2) => {
    return kinderGardenData.compareDistrictAverages(dist1, dist2);
  };

  render() {
    return (
      <div className="App">
        <h1>KinderCompare</h1>
        <Search
          searchDistrict={this.searchDistrict}
          handleButtonClick={this.handleButtonClick}
        />

        {this.state.selected.length === 2 && (
          <Comparison
            data={this.state.data}
            clickCard={this.clickCard}
            selected={this.state.selected}
            getComparison={this.getComparison}
          />
        )}

        <CardContainer
          data={this.state.data}
          clickCard={this.clickCard}
          selected={this.state.selected}
        />
      </div>
    );
  }
}

export default App;
