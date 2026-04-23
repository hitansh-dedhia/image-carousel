// src/components/Controls.jsx

import React from "react";

const Controls = ({ onPrev, onNext }) => {
  return (
    <div>
      <button onClick={onPrev}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Controls;