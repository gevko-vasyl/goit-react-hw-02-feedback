import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, handleClick }) {
  return (
    <ul className={styles.container}>
      {options.map((option) => (
        <li key={option}>
          <button className={styles.button} name={option} onClick={handleClick}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};
