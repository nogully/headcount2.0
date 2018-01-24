import React from "react";
import "../styles/Card.css";
import PropTypes from "prop-types";

const Card = ({ data }) => {
  const yearsArray = Object.keys(data.data);
  const percentArray = Object.values(data.data);

  const elements = percentArray.map((percent, index) => {
    let percentClass = 'belowFifty'; 
    
    if (percent >= 0.500) {
      percentClass = 'aboveFifty';
    }

    return (
      <div className="card-data-row" key={index}>
        <span className="years">{yearsArray[index]} : </span>
        <span className={percentClass}>{percent}</span>
      </div>
    );
  });

  return (
    <article>
      <h3>{data.location}</h3>
      <div className="element-wrapper">{elements}</div>
    </article>
  );
};

Card.prototype = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      location: PropTypes.string.isRequired,
      data: PropTypes.shape({
        2004: PropTypes.number.isRequired,
        2005: PropTypes.number.isRequired,
        2006: PropTypes.number.isRequired,
        2007: PropTypes.number.isRequired,
        2008: PropTypes.number.isRequired,
        2009: PropTypes.number.isRequired,
        2010: PropTypes.number.isRequired,
        2011: PropTypes.number.isRequired,
        2012: PropTypes.number.isRequired,
        2013: PropTypes.number.isRequired,
        2014: PropTypes.number.isRequired
      }).isRequired
    })
  ).isRequired
}

export default Card;