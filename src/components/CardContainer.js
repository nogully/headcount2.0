import React from "react";
import Card from "./Card";
import "../styles/CardContainer.css";
import PropTypes from "prop-types";

const CardContainer = ({ data }) => {
  const renderedCards = data.map((district, index) => (
    <Card data={district} key={index} />
  ));

  return <div className="CardContainer">{renderedCards}</div>;
};

CardContainer.propTypes = {
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
};

export default CardContainer;
