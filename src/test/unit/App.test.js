/* eslint-disable */
import React from "react";
import App from "../../App";
import { shallow, mount, render } from "enzyme";
import DistrictRepository from '../../helper';
import kinderData from '../../data/kindergartners_in_full_day_program';

const kinderGardenData = new DistrictRepository(kinderData);

describe('App', () => {
  let wrapper;

  beforeEach( () => {
    wrapper = shallow( <App /> )
  });

  it('exists and matches snapshot', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper).toMatchSnapshot();
  });

  it('Should start with default state property of data set to an array of all the cleaned district objects', () => {
    expect(wrapper.state().data.length).toEqual(181);
    expect(wrapper.state().data[3].location).toEqual("ADAMS-ARAPAHOE 28J");
  });

  it('Should start with default state property of selected set to an empty array', () => {
    expect(wrapper.state().selected).toEqual([]);
  });

  it('Should have a method of searchDistrict which finds matches based on a search term and sets them to state.data', () => {
    expect(wrapper.state().data.length).toEqual(181);
    wrapper.instance().searchDistrict('Colorado');
    expect(wrapper.state().data.length).toEqual(2);
  });

  it('Should search dynamically upon each key press and update state with the results', () => {
    expect(wrapper.state().data.length).toEqual(181);
    wrapper.instance().searchDistrict('ad');
    expect(wrapper.state().data.length).toEqual(8);
  });

  it('When a user clicks a card, its district object should be added to the state.selected array', () => {
    expect(wrapper.state().selected).toEqual([]);
    wrapper.instance().clickCard('COLORADO');
    expect(wrapper.state().selected[0].location).toEqual('COLORADO')
  })

  it('It does allow the user to select more than two cards', () => {
    expect(wrapper.state().selected).toEqual([]);
    wrapper.instance().clickCard('COLORADO');
    wrapper.instance().clickCard('COLORADO SPRINGS 11');
    wrapper.instance().clickCard('ADAMS-ARAPAHOE 28J');
    expect(wrapper.state().selected.length).toEqual(2);
    expect(wrapper.state().selected[0].location).toEqual('COLORADO SPRINGS 11');
    expect(wrapper.state().selected[1].location).toEqual('ADAMS-ARAPAHOE 28J');
  })

  it('Upon clicking the card a second time its district object should be removed from the state.selected array', () => {
    expect(wrapper.state().selected).toEqual([]);
    wrapper.instance().clickCard('COLORADO');
    expect(wrapper.state().selected[0].location).toEqual('COLORADO')
    wrapper.instance().clickCard('COLORADO');
    expect(wrapper.state().selected).toEqual([]);
  })

  it('It should have a method which takes in two school districts and returns an object with their averages', () => {
    expect(wrapper.instance().getComparison('COLORADO', 'ACADEMY 20')).toEqual({'COLORADO': 0.53, 'ACADEMY 20': 0.407, 'compared': 1.302});
  })

  it('should have a visual indication that cards are selected', () => {
    let mountedWrapper = mount(<App />)
    expect(mountedWrapper.find('article').first().hasClass('highlighted')).toEqual(false)

    mountedWrapper.find('Card').first().simulate('click');
  
    expect(mountedWrapper.find('article').first().hasClass('highlighted')).toEqual(true)
  })

  it('If clicked a second time, the district should revert back to its previous state', () => {
    let mountedWrapper = mount(<App />)
    expect(mountedWrapper.find('article').first().hasClass('highlighted')).toEqual(false)

    mountedWrapper.find('Card').first().simulate('click');
    expect(mountedWrapper.find('article').first().hasClass('highlighted')).toEqual(true)

    mountedWrapper.find('Card').first().simulate('click');
    expect(mountedWrapper.find('article').first().hasClass('highlighted')).toEqual(false)
  })

  it ('when user clicks a card, those cards appear at the top of the app with an additional comparison card', () => {
    let mountedWrapper = mount(<App />)
    expect(mountedWrapper.state().data.length).toEqual(181);
    expect(mountedWrapper.find('article').length).toEqual(181)
    expect(mountedWrapper.find('Comparison').length).toEqual(0)


    mountedWrapper.find('Card').first().simulate('click');
    mountedWrapper.find('Card').last().simulate('click');

    expect(mountedWrapper.state().data.length).toEqual(181);
    expect(mountedWrapper.find('article').length).toEqual(184);

    expect(mountedWrapper.find('Comparison').length).toEqual(1)
  })


});