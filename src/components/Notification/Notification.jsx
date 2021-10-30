import React from "react";
import PropTypes from "prop-types";

export default function Notification({ message }) {
  return (
    <div>
      <h3>{message}</h3>
    </div>
  );
}

Notification.propTypes = { message: PropTypes.string.isRequired };
