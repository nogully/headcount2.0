/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount, render } from "enzyme";
import CardContainer from "../../components/CardContainer";
import { containerData } from "./mockData";
import Card from "../../components/Card";

describe("CardContainer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer data={containerData} />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it('should make 2 cards if 2 cards are passed into it', () => {
    expect(wrapper.find('Card').length).toEqual(2)
  })
});
