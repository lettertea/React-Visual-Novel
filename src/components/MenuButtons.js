import React from "react";

function MenuButtons(props) {
  return (
    <div>
      <div className="menu-buttons">
        <span>
          <button onClick={props.setPreviousFrame}>Back</button>
        </span>
        <span>
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to save?"))
                props.saveOne();
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to load?"))
                props.loadOne();
            }}
          >
            Load: {props.saveOneIndex + 1}
          </button>
        </span>
        <span>
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to save?"))
                props.saveTwo();
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to load"))
                props.loadTwo();
            }}
          >
            Load: {props.saveTwoIndex + 1}
          </button>
        </span>
        <button className="shown-button" onClick={props.toggleMenu}>
          Hide Buttons
        </button>
      </div>
    </div>
  );
}

export default MenuButtons;
