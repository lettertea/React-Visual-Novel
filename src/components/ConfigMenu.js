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
      <div class="config-container slider-container">
        <span>{type}</span>
        <Slider value={value} onChange={onChangeFunction} />
      </div>
    );
  }

  render() {
    const { soundShown, textShown } = this.state;
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
          "font-family": data.label
        };
      }
    };
    return (
      <div
        className="overlay"
        id="config-overlay"
        style={{ "font-family": font }}
      >
        <div className="header">Config</div>
        <ul>
          <button
            class={
              "config-btn config-btn--stripe " + (soundShown ? "active" : null)
            }
            onClick={() => this.toggleSound()}
          >
            Audio
          </button>
          <button
            class={
              "config-btn config-btn--stripe " + (textShown ? "active" : null)
            }
            onClick={() => this.toggleText()}
          >
            Text
          </button>
        </ul>
        <div>
          {soundShown ? (
            <div>
              {this.slider("BGM", bgmVolume, bgmVolumeChange)}
              {this.slider("Voice", voiceVolume, voiceVolumeChange)}
              {this.slider("Effect", effectVolume, effectVolumeChange)}
            </div>
          ) : null}
        </div>
        <div>
          {textShown ? (
            <div className="config-container font-container">
              Font Styles
              <Select
                options={options}
                styles={styles}
                onChange={changeFont}
                defaultValue={
                  options[options.findIndex(obj => obj.label === font)]
                }
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ConfigMenu;
