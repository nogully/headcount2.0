/* eslint-disable */
import React from "react";
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

  it('should make 2 Card components if it receives a full selected array', () => {
    expect(wrapper.find('Card').length).toEqual(2)
  })

  it('should render an average card in the middle of two Card components', () => {
    expect(wrapper).toMatchSnapshot();
  }) 

  it('should display an average of the two districts', () => {
    expect(wrapper.find('.compared').text()).toEqual('1.302')
  })

});
