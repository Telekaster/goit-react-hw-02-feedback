import { Component } from "react";
import styles from "./FeedbackOptions.css";

function Feedback({ onClickGood, onClickNeutral, onClickBad }) {
  return (
    <>
      <div className="button__area">
        <ul className="button__list">
          <li>
            <button className="button__btn good" onClick={onClickGood}>
              Good
            </button>
          </li>
          <li>
            <button className="button__btn neutral" onClick={onClickNeutral}>
              Neutral
            </button>
          </li>
          <li>
            <button className="button__btn bad" onClick={onClickBad}>
              Bad
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Feedback;
