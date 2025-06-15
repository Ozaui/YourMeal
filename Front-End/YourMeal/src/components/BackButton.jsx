import React from "react";

const BackButton = ({ onBack }) => {
  return (
    <div>
      <div>
        <button onClick={onBack}>Before</button>
      </div>
    </div>
  );
};

export default BackButton;
