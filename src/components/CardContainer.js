import React from 'react';
import Card from './Card';
import '../styles/CardContainer.css';

const CardContainer = ({ data }) => {
  const renderedCards = data.map((district, index) => <Card data={district} key={index} />
  )

  return (
    <div className="CardContainer">
    { renderedCards }
    </div>
  )
}

export default CardContainer;