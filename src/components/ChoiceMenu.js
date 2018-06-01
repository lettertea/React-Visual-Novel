import React from "react";

function ChoiceMenu(props) {
  function renderChoiceOptions(key) {
    return (
      <input
        type="button"
        className="choice-button"
        key={key.content}
        alt={key.routeBegins}
        name={key.store}
        value={key.content}
        id={key.resetStore}
        placeholder={key.nextIndex}
        onClick={props.onChoiceSelected}
      />
    );
  }

  return <div className="overlay overlay-choices">{props.choiceOptions.map(renderChoiceOptions)}</div>;
}

export default ChoiceMenu;
