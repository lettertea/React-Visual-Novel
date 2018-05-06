import React from "react";

function ChoiceOption(props) {
  return (
    <input
      type="button"
      className="choice-button"
      key={props.content}
      id={props.jumpToBecauseChoice}
      name={props.store}
      value={props.content}
      onClick={props.onChoiceSelected}
    />
  );
}

export default ChoiceOption;
