import React, { Component } from "react";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

class App extends Component {
  state = {
    good_value: 0,
    neutral_value: 0,
    bad_value: 0,
  };

  handleClickNeutral = (evt) => {
    const key = evt.target.id;

    this.setState((prevState) => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback = () => {
    return (
      this.state.good_value + this.state.neutral_value + this.state.bad_value
    );
  };

  countPositiveFeedbackPercentage() {
    return Math.round(
      (this.state.good_value / this.countTotalFeedback()) * 100
    );
  }

  render() {
    return (
      <>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions onClickNeutral={this.handleClickNeutral} />
          }
        />

        {this.state.good_value === 0 &&
        this.state.neutral_value === 0 &&
        this.state.bad_value === 0 ? (
          <Section title="Statistics" children={<Notification />} />
        ) : (
          <Section
            title="Statistics"
            children={
              <Statistics
                good_value={this.state.good_value}
                neutral_value={this.state.neutral_value}
                bad_value={this.state.bad_value}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            }
          />
        )}
      </>
    );
  }
}

export default App;
