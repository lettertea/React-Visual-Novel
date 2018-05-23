import React from "react";
import novelFrames from "../story/novelFrames";

function Backlog(props) {
  let loggedText = [];
  for (let i = props.index; i >= 0; i--) {
    loggedText.push(
      <div className="backlog" key={i}>
        <div
          className="backlog-jump-container"
          onClick={() => {
            props.setFrame(i);
            props.toggleBacklog();
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
