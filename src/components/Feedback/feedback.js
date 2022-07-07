import React from 'react';

class Feedback extends React.Component {
  handleLeaveFeedback = () => {
    console.log('lox');
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.handleLeaveFeedback}>
          Good
        </button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
      </div>
    );
  }
}
export default Feedback;
