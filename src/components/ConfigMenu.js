import React, { Component } from "react";

class ConfigMenu extends Component {
  constructor() {
    super(); //constructor init

    this.state = {
      soundShown: true,
      textShown: false
    };
  }

  toggleSound() {
    if (!this.state.soundShown) {
      this.setState({
        soundShown: true,
        textShown: false
      });
    }
  }

  toggleText() {
    if (!this.state.textShown) {
      this.setState({
        textShown: true,
        soundShown: false
      });
    }
  }

  render() {
    return (
      <div className="overlay" id="config-overlay">
        <ul>
          <li id="config-title">
            <a class="active">Config</a>
          </li>
          <li onClick={() => this.toggleSound()}>
            <a>Sound</a>
          </li>
          <li onClick={() => this.toggleText()}>
            <a>Text</a>
          </li>
        </ul>
        <div> {this.state.soundShown ? "sound shown" : null}</div>
        <div> {this.state.textShown ? "text shown" : null}</div>
      </div>
    );
  }
}

export default ConfigMenu;
