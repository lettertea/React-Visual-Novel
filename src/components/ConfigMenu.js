import React, { Component } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

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

  slider(type, value, onChangeFunction) {
    return (
      <div class="slider-container">
        <span>{type}</span>
        <Slider value={value} onChange={onChangeFunction} />
      </div>
    );
  }

  render() {
    const {
      bgmVolume,
      bgmVolumeChange,
      effectVolume,
      effectVolumeChange,
      voiceVolume,
      voiceVolumeChange
    } = this.props;
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
        <div>
          {" "}
          {this.state.soundShown ? (
            <div>
              {this.slider("BGM", bgmVolume, bgmVolumeChange)}
              {this.slider("Voice", voiceVolume, voiceVolumeChange)}
              {this.slider("Effect", effectVolume, effectVolumeChange)}
            </div>
          ) : null}
        </div>
        <div> {this.state.textShown ? "text shown" : null}</div>
      </div>
    );
  }
}

export default ConfigMenu;
