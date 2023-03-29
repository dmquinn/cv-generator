import React from "react";

const ProgressBar = ({ rating }) => {
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${rating * 25}%` }}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default ProgressBar;
