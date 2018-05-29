import React from "react";
import story from "../story/story";

function Backlog(props) {
  function handleJump(index, i, choicesIndex) {
    props.toggleBacklog();

    props.setChoice(choicesIndex);
    props.setChoicesHistory(props.choicesHistory.slice(0, i));

    props.setFrame(index);
    props.setIndexHistory(props.indexHistory.slice(0, i));
    console.log(props.indexHistory.slice(0, i));

    props.setChoicesStore(props.choicesHistory[index]);
    props.setChoicesHistory(props.choicesHistory.slice(0, i));
  }

  let textHistory = [];
  const indexHistory = props.indexHistory;
  const choicesIndexHistory = props.choicesIndexHistory;

  for (let i = 0; i < indexHistory.length; i++) {
    const index = indexHistory[i];
    const choicesIndex = choicesIndexHistory[i];

    textHistory.unshift(
      <div className="backlog" key={i}>
        <div className="backlog-jump-container" onClick={() => handleJump(index, i, choicesIndex)}>
          <span className="backlog-jump-text">Jump</span>
        </div>
        <div className="backlog-speaker">{story[index].speaker}</div>
        {story[index].text}
      </div>
    );
  }

  return <div className="overlay backlog-overlay">{textHistory}</div>;
}

export default Backlog;
