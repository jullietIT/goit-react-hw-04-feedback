import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx';
import Notification from './NotificationMessage/NotificationMessage';
import Statistics from './Statistics/Statistics';
import { Wrapper } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrementGood = () => {
    setGood(state => state + 1);
  };

  const handleIncrementNeutral = () => {
    setNeutral(state => state + 1);
  };

  const handleIncrementBad = () => {
    setBad(state => state + 1);
  };

  // // вспомогательные методы класс
  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };

  const countTotalFeedback = () =>
    Object.values({ good, neutral, bad }).reduce(
      (acc, value) => acc + value,
      0
    );

  // // вспомогательные методы класс
  // countPositiveFeedbackPercentage = () => {
  //   const total = this.countTotalFeedback();
  //   return total ? (this.state.good / total) * 100 : 0;
  // };
  const total = countTotalFeedback();
  const countPositiveFeedbackPercentage = () =>
    `${Math.round((good / total) * 100)}%`;

  const positive = countPositiveFeedbackPercentage();
  return (
    <Wrapper>
      <FeedbackOptions
        onClickGood={handleIncrementGood}
        onClickNeutral={handleIncrementNeutral}
        onClickBad={handleIncrementBad}
      />
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          TotalFeedback={total}
          PositiveFeedbackPercentage={positive}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Wrapper>
  );
}

// export default App;
