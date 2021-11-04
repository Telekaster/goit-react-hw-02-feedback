import { Component } from "react";
import styles from "./Feedback.css";

class Feedback extends Component {
  state = {
    good_value: 0,
    neutral_value: 0,
    bad_value: 0,
  };

  handleClickGood = () => {
    this.setState((prevState) => {
      return { good_value: prevState.good_value + 1 };
    });
  };

  handleClickNeutral = () => {
    this.setState((prevState) => {
      return { neutral_value: prevState.neutral_value + 1 };
    });
  };

  handleClickBad = () => {
    this.setState((prevState) => {
      return { bad_value: prevState.bad_value + 1 };
    });
  };

  render() {
    return (
      <div className="button__area">
        <h2>Please leave feedback</h2>
        <ul className="button__list">
          <li>
            <button className="button__btn" onClick={this.handleClickGood}>
              Good
            </button>
          </li>
          <li>
            <button className="button__btn" onClick={this.handleClickNeutral}>
              Neutral
            </button>
          </li>
          <li>
            <button className="button__btn" onClick={this.handleClickBad}>
              Bad
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
