import React, { Component } from 'react';
import './styles/App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';
import CardContainer from './components/CardContainer'

const kinderGardenData = new DistrictRepository(kinderData);
const mockData = kinderGardenData.findAllMatches();


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: mockData
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Headcount 2.0</h1>
        <CardContainer data={this.state.data}/>
      </div>
    );
  }
}

export default App;
