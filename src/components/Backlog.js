import React from "react";
import novelFrames from "../story/novelFrames";
import Choices from "../story/Choices";

function Backlog(props) {
  let loggedText = [];
  let choicesIndex = Choices.length - 1;
  for (let i = props.index; i >= 0; i--) {
    if (novelFrames[i].choicesExist) {
      choicesIndex--;
    }
    loggedText.push(
      <div className="backlog" key={i}>
        <div
          className="backlog-jump-container"
          onClick={() => {
            props.setFrame(i);
            props.toggleBacklog();
            props.setChoice(choicesIndex);
            props.setChoicesStore(props.choicesHistory[i]);
          }}
        >
          <span className="backlog-jump-text">Jump</span>
        </div>
        <div className="backlog-speaker">{novelFrames[i].speaker}</div>
        {novelFrames[i].text}
      </div>
    );
  }

  return <div className="overlay backlog-overlay">{loggedText}</div>;
}

export default Backlog;
