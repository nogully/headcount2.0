import React from 'react';

const Card = ({ data }) => {
  const yearsArray = Object.keys(data.data);
  const percentArray = Object.values(data.data);
  const elements = percentArray.map( (percent, index) => {
    return <div key={index}>{yearsArray[index]} : {percent} </div>
  })

  return (
    <article>
      <h3>{ data.location }</h3>
      {elements}
    </article>
  )
}
export default Card;