import { Component } from 'react';
import FeedbackOptions from '../feedback/FeedbackOptions';
import Statistic from '../statistic/Statistic';
import Section from '../section/Section';
import Container from './AppStyle';
import Notification from 'components/statistic/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (acc, feedback) => acc + feedback,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const positive = Number(this.state.good);
    return `${Math.floor((positive / this.countTotalFeedback()) * 100)}%`;
  };

  handleClick = evt => {
    const key = evt.target.dataset.key;
    this.setState(prevState => {
      return {
        ...prevState,
        [key]: prevState[key] + 1,
      };
    });
  };

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() > 0 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
