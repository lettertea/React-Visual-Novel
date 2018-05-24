import React from "react";
import novelFrames from "../story/novelFrames";

function Backlog(props) {
  function handleJump(i, choicesIndex) {
    props.setFrame(i);
    props.toggleBacklog();
    props.setChoice(choicesIndex);
    props.setChoicesStore(props.choicesHistory[i]);
  }
  let textHistory = [];
  let choicesIndex = 0;
  let pastFirstChoice = false;
  for (let i = 0; i <= props.index; i++) {
    if (novelFrames[i].choicesExist && pastFirstChoice) {
      choicesIndex++;
    }
    if (novelFrames[i].choicesExist) {
      pastFirstChoice = true;
    }
    textHistory.unshift(
      <div className="backlog" key={i}>
        <div className="backlog-jump-container" onClick={() => handleJump(i, choicesIndex)}>
          <span className="backlog-jump-text">{i === props.index ? null : "Jump"}</span>
        </div>
        <div className="backlog-speaker">{novelFrames[i].speaker}</div>
        {novelFrames[i].text}
      </div>
    );
  }

  return <div className="overlay backlog-overlay">{textHistory}</div>;
}

export default Backlog;
