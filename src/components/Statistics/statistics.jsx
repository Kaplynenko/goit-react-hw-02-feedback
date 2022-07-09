import React from 'react';
const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  positiveFeedbackPercentage,
}) => {
  return (
    <ul>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{countTotalFeedback()}</li>
      <li>Positive feedback:{positiveFeedbackPercentage()}%</li>
    </ul>
  );
};

export default Statistics;
