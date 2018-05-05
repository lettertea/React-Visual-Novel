import React from "react";
import ChoiceOption from "../components/ChoiceOption";

function ChoiceMenu(props) {
  function renderChoiceOptions(key) {
    return (
      <ChoiceOption
        key={key.content}
        content={key.content}
        store={key.store}
        jumpTo={key.jumpTo}
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
