import React from 'react';
import Card from './Card';

const CardContainer = ({ data }) => {
  const renderedCards = data.map((district, index) => <Card data={district} key={index} />
  )

  return (
    <div>
    { renderedCards }
    </div>
  )
}

export default CardContainer;