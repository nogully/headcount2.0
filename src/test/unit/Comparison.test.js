/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, render } from "enzyme";
import Comparison from "../../components/Comparison";
import { selected, containerData, cardData } from './mockData';
import Card from "../../components/Card";


const getComparison = function () {
  return {'COLORADO': 0.53, 'ACADEMY 20': 0.407, 'compared': 1.302}
}


describe("Comparison", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Comparison data={containerData} selected={selected} getComparison={getComparison} />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  // it('should make 2 cards if 2 cards are passed into it', () => {
  //   expect(wrapper.find('Card').length).toEqual(2)
  // })

  // should render a comparision card
});
