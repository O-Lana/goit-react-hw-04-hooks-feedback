import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const key = e.target.name;

    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };


  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  const options = ['good', 'neutral', 'bad'];

    const totalFeedback = countTotalFeedback();
    const positiveFeedback = countPositiveFeedbackPercentage(good);

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        </Section>

        <Section title={'Statistics'}>
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
};
