import React, { Component } from "react";
import Slider from "react-rangeslider";
import Select from "react-select";
import "react-rangeslider/lib/index.css";

class ConfigMenu extends Component {
  constructor() {
    super(); //constructor init

    this.state = {
      audioShown: true,
      textShown: false
    };
    this.toggleAudio = this.toggleAudio.bind(this);
    this.toggleText = this.toggleText.bind(this);
  }

  toggleAudio() {
    if (!this.state.audioShown) {
      this.setState({
        audioShown: true,
        textShown: false
      });
    }
  }

  toggleText() {
    if (!this.state.textShown) {
      this.setState({
        textShown: true,
        audioShown: false
      });
    }
  }

  category(name, shown, handleClick) {
    return (
      <button class={"config-btn config-btn--stripe " + (shown ? "active" : null)} onClick={handleClick}>
        {name}
      </button>
    );
  }

  slider(type, value, onChangeFunction) {
    return (
      <div class="config-container slider-container">
        <span>{type}</span>
        <Slider value={value} onChange={onChangeFunction} />
      </div>
    );
  }

  render() {
    const { audioShown, textShown } = this.state;
    const {
      font,
      changeFont,
      bgmVolume,
      bgmVolumeChange,
      soundEffectVolume,
      soundEffectVolumeChange,
      voiceVolume,
      voiceVolumeChange,
      toggleConfigMenu
    } = this.props;
    const options = [
      { label: "Arial" },
      { label: "Arial Black" },
      { label: "Courier New" },
      { label: "Georgia" },
      { label: "Helvetica" },
      { label: "Impact" },
      { label: "Lucida Sans Unicode" },
      { label: "Times" },
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
          fontFamily: data.label
        };
      }
    };
    return (
      <div className="overlay" id="config-overlay" style={{ fontFamily: font }}>
        <ul className="header">
          <li>
            <a>Config</a>
          </li>
          <li className="exit-button" onClick={toggleConfigMenu}>
            <a>&times;</a>
          </li>
        </ul>
        <ul>
          {this.category("Audio", audioShown, this.toggleAudio)}
          {this.category("Text", textShown, this.toggleText)}
        </ul>
        <div id="config-body">
          {audioShown ? (
            <div>
              {this.slider("BGM", bgmVolume, bgmVolumeChange)}
              {this.slider("Voice", voiceVolume, voiceVolumeChange)}
              {this.slider("Sound Effect", soundEffectVolume, soundEffectVolumeChange)}
            </div>
          ) : null}
          {textShown ? (
            <div className="config-container font-container">
              Font Styles
              <Select
                options={options}
                styles={styles}
                onChange={changeFont}
                defaultValue={options[options.findIndex(obj => obj.label === font)]}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ConfigMenu;
