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

  
});
