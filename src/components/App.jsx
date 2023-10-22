import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";
import { Statistics } from "./Statistics";
import { styled } from "styled-components";
import { Notification } from "./Notification";

const Wrapper = styled.div`
padding: 30px;
`

export class App extends Component {
  
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  stateKeys = Object.keys(this.state);
  countTotalFeedback = () => Object.values(this.state).reduce((a, b) => a + b, 0);
  countPositiveFeedbackPercentage = () => Math.floor((Number(this.state.good) * 100) / this.countTotalFeedback());
 
  handleClick = option => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
  });
  }

  render() {
    return (<Wrapper>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions options={this.stateKeys} onLeaveFeedback={this.handleClick} />
        </Section>
      <Section title={"Statistics"}>
        {this.countTotalFeedback() === 0 ? <Notification message="There is no feedback" /> : <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />}
      </Section>  
    </Wrapper>
    )
  }
}

