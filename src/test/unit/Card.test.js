/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, render } from "enzyme";
import Card from "../../components/Card";
import { cardData } from "./mockData";

describe("Card", () => {
  let wrapper;

  beforeEach(() => {
  wrapper = shallow(<Card data={cardData.district} key={cardData.index} />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it('should render 10 divs with data in them', () => {
    expect(wrapper.find('.card-data-row').length).toEqual(11)
  })

  //does it return data.location
  it('should render the district name as an h3', () => {
    expect(wrapper.find('h3').first().text()).toEqual('COLORADO')
  })
  //is it assigning the percent class correctly
  it('should assign the percent class based on whether the value is over 0.5', () => {
    expect(wrapper.find('.belowFifty').length).toEqual(4)
    expect(wrapper.find('.aboveFifty').length).toEqual(7);
  })


  
});
