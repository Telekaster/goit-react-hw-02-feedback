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
            <FeedbackOptions
              onClickGood={this.handleClickGood}
              onClickNeutral={this.handleClickNeutral}
              onClickBad={this.handleClickBad}
            />
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
