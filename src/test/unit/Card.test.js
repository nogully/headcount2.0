/* eslint-disable */
import React from "react";
import { shallow, mount, render } from "enzyme";
import Card from "../../components/Card";
import { cardData, selected } from "./mockData";

describe("Card", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card data={cardData.district} key={cardData.index} selected={selected}/>);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it('should render 10 divs with data in them', () => {
    expect(wrapper.find('.card-data-row').length).toEqual(11)
  })

  it('should render the district name as an h3', () => {
    expect(wrapper.find('h3').first().text()).toEqual('COLORADO')
  })

  it('should assign the percent class based on whether the value is over 0.5', () => {
    expect(wrapper.find('.belowFifty').length).toEqual(4)
    expect(wrapper.find('.aboveFifty').length).toEqual(7);
  })

  it('should have a visual indication of being clicked when the district of that card is present in the selected array', () => {
    expect(wrapper.find('.highlighted').length).toEqual(1);
  })

  
});
