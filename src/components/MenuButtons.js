import React from "react";

function MenuButtons(props) {
  return (
    <div>
      <div className="menu-buttons">
        <span>
          <button onClick={props.toggleTextLog}>
            {props.textLogShown ? "Hide Text Log" : "Show Text Log"}
          </button>
        </span>
        <span>
          <button onClick={props.toggleTextBox}>
            {props.textBoxShown ? "Hide Text Box" : "Show Text Box"}
          </button>
        </span>
        <span>
          <button onClick={props.toggleSaveMenu}>Save Menu</button>
          <button onClick={props.toggleLoadMenu}>Load Menu</button>
        </span>
        <button className="shown-button" onClick={props.toggleMenu}>
          Hide Buttons
        </button>
      </div>
    </div>
  );
}

export default MenuButtons;
