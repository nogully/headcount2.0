import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Comparison = ( { selected }) => {
  const districtCards;
  if ( selected.length = 2) {
    districtCards = selected.map((district, index) => {
      <Card 
      data={district} 
      key={index}  />
    })
  }

  return ( 
    <div className="Comparison"> 
      Comparison component
      { districtCards }
   </div>
 )
}

export default Comparison;