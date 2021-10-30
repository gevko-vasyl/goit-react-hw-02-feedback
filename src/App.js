import { useState } from "react";

import Section from "components/Section/Section";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Notification from "components/Notification/Notification";

function App() {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = options;

  const handleButtonClick = (e) => {
    let clickedOption = e.target.name;
    console.log(clickedOption);
    setOptions({ ...options, [clickedOption]: options[clickedOption] + 1 });
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = options;
    return Math.round((good / countTotalFeedback()) * 100);
  };
  return (
    <Section className="App">
      <FeedbackOptions
        options={Object.keys(options)}
        handleClick={handleButtonClick}
      />
      {countTotalFeedback() ? (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={countTotalFeedback()}
          positivePercent={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </Section>
  );
}

export default App;
