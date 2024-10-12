import React, { useCallback } from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ handleFeedback }) => {
  const handleGoodFeedback = useCallback(
    () => handleFeedback('good'),
    [handleFeedback]
  );
  const handleNeutralFeedback = useCallback(
    () => handleFeedback('neutral'),
    [handleFeedback]
  );
  const handleBadFeedback = useCallback(
    () => handleFeedback('bad'),
    [handleFeedback]
  );

  return (
    <div>
      <h2>Please leave feedback</h2>
      <div>
        <ul>
          <li>
            <button
              type="button"
              className={styles.button}
              onClick={handleGoodFeedback}
            >
              Good
            </button>
          </li>
          <li>
            <button
              type="button"
              className={styles.button}
              onClick={handleNeutralFeedback}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              type="button"
              className={styles.button}
              onClick={handleBadFeedback}
            >
              Bad
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FeedbackOptions;
