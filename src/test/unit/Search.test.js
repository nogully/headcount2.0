/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Search from '../../components/Search';
import { containerData, cardData } from './mockData';

const searchDistrict = function() {
  return containerData;
};

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Search searchDistrict={searchDistrict} />);
  });

  it('exists', () => {
    expect(wrapper).toBeDefined();
  });

  it('should start out with a state with display set to an empty string', () => {
    expect(wrapper.state().display).toEqual('');
  });

  it('should have a label, input field, and a button in a form element', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should take a search input and set state.display to that input', () => {
    const event = {
      preventDefault() {},
      target: { value: 'colorado' }
    };
    expect(wrapper.state().display).toEqual('');
    expect(wrapper.find('input').text()).toEqual('');

    wrapper.instance().handleInput(event);

    expect(wrapper.state().display).toEqual('colorado');
  });

  it('sends the input text to searchDistrict method which will return an array of district objects', () => {
    const event = {
      preventDefault() {},
      target: { value: 'colorado' }
    };
    wrapper.instance().handleInput(event);
    expect(wrapper.instance().props.searchDistrict(event.target.value)).toEqual(
      containerData
    );
  });

  it('user should be able to pass in a case insensitive query', () => {
    const event = {
      preventDefault() {},
      target: { value: 'cOlOraDo' }
    };
    wrapper.instance().handleInput(event);
    expect(wrapper.instance().props.searchDistrict(event.target.value)).toEqual(
      containerData
    );
  });

  it('has a button which clears the input text and then causes all districts to display once more', () => {
    expect(wrapper.state().display).toEqual('');

    wrapper.find('input').simulate('change', { target: { value: 'Bou' } });
    expect(wrapper.state().display).toEqual('Bou')
    wrapper.find('button').simulate('click');

    expect(wrapper.state().display).toEqual('');
  });

});
