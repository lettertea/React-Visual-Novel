import React from "react";

function MenuButtons(props) {
  function saveAndLoadButtons(number) {
    return (
      <span>
        <button
          onClick={() => {
            if (
              JSON.parse(localStorage.getItem(number)) &&
              window.confirm("Are you sure you want to overwrite your save?")
            ) {
              props.saveSlot(number);
            } else {
              props.saveSlot(number);
            }
          }}
        >
          Save
        </button>
        {JSON.parse(localStorage.getItem(number)) ? (
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to load?"))
                props.loadSlot(number);
            }}
          >
            Load
          </button>
        ) : null}
      </span>
    );
  }

  return (
    <div>
      <div className="menu-buttons">
        <span>
          <button onClick={props.toggleTextLog}>
            {props.textLogShown ? "Hide Text Log" : "Show Text Log"}
          </button>
        </span>

        {saveAndLoadButtons("one")}
        {saveAndLoadButtons("two")}
        {saveAndLoadButtons("three")}
        <button className="shown-button" onClick={props.toggleMenu}>
          Hide Buttons
        </button>
      </div>
    </div>
  );
}

export default MenuButtons;
