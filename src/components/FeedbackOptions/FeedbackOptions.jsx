import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, handleClick }) {
  return (
    <div className={styles.container}>
      {options.map((option) => (
        <button
          className={styles.button}
          key={option}
          name={option}
          onClick={handleClick}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};
