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
      <>
        <div className="button__area">
          <h2>Please leave feedback</h2>
          <ul className="button__list">
            <li>
              <button
                className="button__btn good"
                onClick={this.handleClickGood}
                id={this.state.good_value}
              >
                Good
              </button>
            </li>
            <li>
              <button
                className="button__btn neutral"
                onClick={this.handleClickNeutral}
              >
                Neutral
              </button>
            </li>
            <li>
              <button className="button__btn bad" onClick={this.handleClickBad}>
                Bad
              </button>
            </li>
          </ul>
        </div>

        <div className="statistics__area">
          <h2>Statistics</h2>
          <ul className="statistics__list ">
            <li>{`Good: ${this.state.good_value}`}</li>
            <li>{`Neutral: ${this.state.neutral_value}`}</li>
            <li>{`Bad: ${this.state.bad_value}`}</li>
          </ul>
        </div>
      </>
    );
  }
}

export default Feedback;
