import React, { useMemo } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const total = useMemo(() => {
    return good + neutral + bad;
  }, [good, neutral, bad]);

  const positiveFeedbackPercentage = useMemo(() => {
    return total > 0 ? ((good / total) * 100).toFixed(2) : 0;
  }, [good, total]);

  return (
    <div>
      <ul style={{ flexDirection: 'column' }}>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {positiveFeedbackPercentage}%</p>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
