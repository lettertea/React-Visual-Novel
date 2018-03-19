import React from "react";

function MenuButtons(props) {
  return (
    <div>
      <div className="menu-buttons">
        <button onClick={props.toggleBacklog}>
          {props.backlogShown ? "Hide Backlog" : "Show Backlog"}
        </button>
        <button onClick={props.toggleTextBox}>
          {props.textBoxShown ? "Hide Text Box" : "Show Text Box"}
        </button>
        <button onClick={props.toggleSkip}>
          {props.isSkipping ? "Stop" : "Skip"}
        </button>
        <button onClick={props.toggleSaveMenu}>
          {props.saveMenuShown ? "Hide Saves" : "Show Saves"}
        </button>
        <button onClick={props.toggleLoadMenu}>
          {props.loadMenuShown ? "Hide Loads" : "Show Loads"}
        </button>

        <button className="shown-button" onClick={props.toggleMenu}>
          Hide Buttons
        </button>
      </div>
    </div>
  );
}

export default MenuButtons;
