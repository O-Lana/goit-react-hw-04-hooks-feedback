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
    // const good = this.state.good;
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


//! было
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = key => {
//     this.setState(prevState => ({ [key]: prevState[key] + 1 }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((sum, value) => sum + value, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const good = this.state.good;
//     return Math.round((good * 100) / total);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
//     const totalFeedback = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage(good);

//     return (
//       <>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
//         </Section>

//         <Section title={'Statistics'}>
//           {totalFeedback > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedback}
//               positiveFeedback={positiveFeedback}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

// export default App;