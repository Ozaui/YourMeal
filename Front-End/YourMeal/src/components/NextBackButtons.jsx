const NextBackButtons = ({ onNext, onBack }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <button onClick={onNext}>Next</button>
        <button onClick={onBack}>Before</button>
      </div>
    </div>
  );
};

export default NextBackButtons;
