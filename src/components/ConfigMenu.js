import React, { Component } from "react";
import Slider from "react-rangeslider";
import Select from "react-select";
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
      font,
      changeFont,
      bgmVolume,
      bgmVolumeChange,
      effectVolume,
      effectVolumeChange,
      voiceVolume,
      voiceVolumeChange
    } = this.props;
    const options = [
      { label: "Arial" },
      { label: "Arial Black" },
      { label: "Bookman" },
      { label: "Courier New" },
      { label: "Garamond" },
      { label: "Georgia" },
      { label: "Helvetica" },
      { label: "Impact" },
      { label: "Lucida Grande" },
      { label: "Lucida Sans Unicode" },
      { label: "Times New Roman" },
      { label: "Trebuchet MS" },
      { label: "Verdana" }
    ];

    for (let i = 0; i < options.length; i++) {
      options[i].value = options[i].label;
    }

    const styles = {
      option: (styles, { data }) => {
        return {
          ...styles,
          "font-family": data.label
        };
      }
    };
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
          {this.state.soundShown ? (
            <div>
              {this.slider("BGM", bgmVolume, bgmVolumeChange)}
              {this.slider("Voice", voiceVolume, voiceVolumeChange)}
              {this.slider("Effect", effectVolume, effectVolumeChange)}
            </div>
          ) : null}
        </div>
        <div>
          {this.state.textShown ? (
            <Select
              options={options}
              styles={styles}
              onChange={changeFont}
              defaultValue={options[11]}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default ConfigMenu;
