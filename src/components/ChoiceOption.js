import React from "react";

function ChoiceOption(props) {
  return (
    <input
      type="button"
      className="choice-button"
      name={props.answerType}
      checked={props.answerType === props.answer}
      id={props.answerType}
      value={props.answerContent}
      disabled={props.answer}
      onClick={props.onChoiceSelected}
    />
  );
}

export default ChoiceOption;
