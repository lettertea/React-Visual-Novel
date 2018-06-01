import React, { Component } from "react";
import story from "../story/story";

class Backlog extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  handleJump(i) {
    this.props.toggleBacklog();
    this.props.setState(this.props.stateHistory[i]);
    this.props.setStateHistory(this.props.stateHistory.slice(0, i));
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView();
  }

  render() {
    let textHistory = [];
    const stateHistory = this.props.stateHistory;

    for (let i = 0; i < stateHistory.length; i++) {
      const index = stateHistory[i].index;

      textHistory.push(
        <div className="backlog" key={i}>
          <div className="backlog-jump-container" onClick={() => this.handleJump(i)}>
            <span className="backlog-jump-text">Jump</span>
          </div>
          <div className="backlog-speaker">{story[index].speaker}</div>
          {story[index].text}
        </div>
      );
    }
    return (
      <div className="overlay backlog-overlay">
        {textHistory}
        <ul className="header backlog-header" ref={el => (this.messagesEnd = el)}>
          <li>
            <a>Backlog</a>
          </li>
          <li className="exit-button backlog-exit" onClick={this.props.toggleBacklog}>
            <a>&times;</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Backlog;
