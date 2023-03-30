import FeedbackOptions from '../feedback/FeedbackOptions';
import Statistic from '../statistic/Statistic';
import Section from '../section/Section';
import Container from './AppStyle';
import Notification from 'components/Notification';
import { useState } from 'react';

const App = () => {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [showStat, setShowStat] = useState(false);

  const countTotalFeedback = () => {
    return Object.values(options).reduce((acc, feedback) => acc + feedback, 0);
  };

  const countPositiveFeedbackPercentage = () => {   
    return `${Math.floor((options.good / countTotalFeedback()) * 100)}%`;
  };

  const handleClick = evt => {
    const key = evt.target.dataset.key;  
    setOptions(prevState => ({
      ...prevState,
      [key]: prevState[key]+ 1,
    }));
    setShowStat(true)
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistic">
        {showStat?
          <Statistic
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

export default App;
