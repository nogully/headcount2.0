import React from "react";
import "../styles/Card.css";

const Card = ({ data }) => {
  const yearsArray = Object.keys(data.data);
  const percentArray = Object.values(data.data);
  const elements = percentArray.map((percent, index) => {
    return (
      <div className="card-data-row" key={index}>
        <span className="years">{yearsArray[index]} : </span>
        <span className="percents">{percent}</span>{" "}
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
export default Card;
