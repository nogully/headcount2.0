import React from "react";
import Card from "./Card";
import "../styles/Comparison.css";
import PropTypes from "prop-types";

const Comparison = ({ data, clickCard, selected, getComparison }) => {
  const averageObj = getComparison(selected[0].location, selected[1].location);
  const renderedCards = selected.map((district, index) => {
    return (
      <Card
        data={district}
        clickCard={clickCard}
        key={index}
        selected={selected}
      />
    );
  });

  return (
    <div className="Comparison">
      {renderedCards[0]}
      <article className="average-card">
        <h3>{Object.keys(averageObj)[0]}</h3>
        <h3>{Object.values(averageObj)[0]}</h3>
        <h3>Average</h3>
        <h3 className="compared">{Object.values(averageObj)[2]}</h3>
        <h3>{Object.keys(averageObj)[1]}</h3>
        <h3>{Object.values(averageObj)[1]}</h3>
      </article>
      {renderedCards[1]}
    </div>
  );
};

export default Comparison;

Comparison.propTypes = {
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
  ).isRequired,
  clickCard: PropTypes.func,
  selected: PropTypes.array.isRequired, 
  getComparison: PropTypes.func.isRequired
};
