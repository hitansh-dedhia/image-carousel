// src/components/Controls.jsx

import React from "react";

const Controls = ({ onPrev, onNext }) => {
  return (
    <div className="carousel-controls">
      <button className="carousel-button" onClick={onPrev}>
        ◀ Previous
      </button>
      <button className="carousel-button" onClick={onNext}>
        Next ▶
      </button>
    </div>
  );
};

export default Controls;