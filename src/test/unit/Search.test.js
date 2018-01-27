/* eslint-disable */
import React from "react";
import { shallow, mount, render } from "enzyme";
import Search from "../../components/Search";
import { containerData, cardData } from './mockData';

const searchDistrict = function () {
  return containerData;
}

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Search searchDistrict={ searchDistrict }/>); 
  })

  it('exists', () => {
    expect(wrapper).toBeDefined();
  })

  it('should start out with a state with display set to an empty string', () => {
    expect(wrapper.state().display).toEqual('');
  })

  it('should have a label, input field, and a button in a form element', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have an input field that reflects state.display', () => {
    expect(wrapper.state().display).toEqual('');    
    expect(wrapper.find('input').text()).toEqual('');

    wrapper.setState({ display: 'colorado' });

    expect(wrapper.find('input').text()).toEqual('colorado');
  })

  it.skip('upon typing, user should see what they are typing via state.display ', () => {
    expect(wrapper.find('input').text()).toEqual('')

    wrapper.find('input').simulate('change', {target: {value: 'colorado'}})

    expect(wrapper.state().display).toEqual('colorado');
    expect(wrapper.find('input').text()).toEqual('colorado');
  })

  it.skip('should call the searchDistrict method upon button click', () => {
    
  })


})