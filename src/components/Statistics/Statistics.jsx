import React, { Component } from "react";
import styles from "./Statistics.css";

function Statistics(props) {
  const { good_value, neutral_value, bad_value, total, positivePercentage } =
    props;

  return (
    <div className="statistics__area">
      <h2>Statistics</h2>
      <ul className="statistics__list ">
        <li>{`Good: ${good_value}`}</li>
        <li>{`Neutral: ${neutral_value}`}</li>
        <li>{`Bad: ${bad_value}`}</li>
        <li>{`Total: ${total}`}</li>
        {!isNaN(positivePercentage) && (
          <li>{`Positive feedback:${positivePercentage}%`}</li>
        )}
      </ul>
    </div>
  );
}

export default Statistics;
