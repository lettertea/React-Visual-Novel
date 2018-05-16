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

  slider() {
    return (
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          class="slider"
          ref="myRange"
        />
        <p>
          Value: <span ref="demo" />
        </p>
      </div>
    );
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
        <div> {this.state.soundShown ? this.slider() : null}</div>
        <div> {this.state.textShown ? "text shown" : null}</div>
      </div>
    );
  }
}

export default ConfigMenu;
