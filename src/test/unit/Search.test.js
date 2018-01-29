/* eslint-disable */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Search from '../../components/Search';
import { containerData, cardData } from './mockData';

const searchDistrict = () => containerData;

const handleButtonClick= () => null;

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search searchDistrict={searchDistrict} handleButtonClick={handleButtonClick}/>);
  });

  it('exists', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a label, input field, and a button in a form element', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
