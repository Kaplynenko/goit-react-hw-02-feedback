import React from 'react';
class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <ul>
        <li>Good:</li>
        <li>Neutral:</li>
        <li>Bad:</li>
        <li>Total:</li>
        <li>Positive feedback:</li>
      </ul>
    );
  }
}
export default Statistics;
