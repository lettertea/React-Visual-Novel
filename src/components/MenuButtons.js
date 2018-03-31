import React from "react";

function MenuButtons(props) {
  if (props.menuButtonsShown) {
    return (
      <div className="container menu-buttons-container">
        <div className="menu-buttons">
          <button onClick={props.toggleTextBox}>
            {props.textBoxShown ? "Hide Text Box" : "Show Text Box"}
          </button>
          <button onClick={props.toggleBacklog}>
            {props.backlogShown ? "Hide Backlog" : "Backlog"}
          </button>
          {props.isSkipping ? (
            <button onClick={props.stopSkip}>Stop</button>
          ) : (
            <button onClick={props.startSkip}>Skip</button>
          )}

          <button onClick={props.toggleSaveMenu}>
            {props.saveMenuShown ? "Hide Saves" : "Save"}
          </button>
          <button onClick={props.toggleLoadMenu}>
            {props.loadMenuShown ? "Hide Loads" : "Load"}
          </button>

          <button className="shown-button" onClick={props.toggleMenu}>
            Hide Buttons
          </button>
        </div>
      </div>
    );
  } else {
    // Shows "Show Buttons" on hover
    return (
      <div className="container menu-buttons-container">
        <div className="menu-buttons hidden">
          <button onClick={props.toggleMenu}>Show Buttons</button>
          <button onClick={props.deleteButtons}>Delete Buttons</button>
        </div>
      </div>
    );
  }
}

export default MenuButtons;
