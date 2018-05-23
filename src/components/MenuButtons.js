import React from "react";

function MenuButtons(props) {
  return (
    <div className="container menu-buttons-container">
      <div className="menu-buttons">
        <button onClick={props.toggleTextBox}>{props.textBoxShown ? "Hide Text Box" : "Show Text Box"}</button>
        <button onClick={props.toggleBacklog}>{props.backlogShown ? "Hide Backlog" : "Backlog"}</button>
        {props.isSkipping ? (
          <button onClick={props.stopSkip}>Stop</button>
        ) : (
          <button onClick={props.startSkip}>Skip</button>
        )}

        <button onClick={props.toggleSaveMenu}>{props.saveMenuShown ? "Hide Saves" : "Save"}</button>
        <button onClick={props.toggleLoadMenu}>{props.loadMenuShown ? "Hide Loads" : "Load"}</button>
        <button onClick={props.toggleConfigMenu}>{props.configMenuShown ? "Hide Config" : "Config"}</button>
      </div>
    </div>
  );
}

export default MenuButtons;
