import React from "react";
import ChoiceOption from "../components/ChoiceOption";

function ChoiceMenu(props) {
  function renderChoiceOptions(key) {
    return (
      <ChoiceOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        onChoiceSelected={props.onChoiceSelected}
      />
    );
  }

  return (
    <div className="overlay overlay-choices">
      {props.choiceOptions.map(renderChoiceOptions)}
    </div>
  );
}

export default ChoiceMenu;
