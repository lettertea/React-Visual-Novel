import React from "react";

function ChoiceMenu(props) {
  function renderChoiceOptions(key) {
    return (
      <input
        type="button"
        className="choice-button"
        key={key.content}
        id={key.routeBegins}
        name={key.store}
        value={key.content}
        onClick={props.onChoiceSelected}
      />
    );
  }

  return <div className="overlay overlay-choices">{props.choiceOptions.map(renderChoiceOptions)}</div>;
}

export default ChoiceMenu;
