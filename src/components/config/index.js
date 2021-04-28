import React, {Component, useState} from "react";
import ReactSlider from "react-rangeslider";
import Select from "react-select";
import "react-rangeslider/lib/index.css";


export default props => {
  const Slider = (type, value, onChangeFunction) =>
    <div class="config-container slider-container">
      <span>{type}</span>
      <ReactSlider value={value} onChange={onChangeFunction} />
    </div>
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
  } = props;

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


  const Audio = () => <div>
    {Slider("BGM", bgmVolume, bgmVolumeChange)}
    {Slider("Voice", voiceVolume, voiceVolumeChange)}
    {Slider("Sound Effect", soundEffectVolume, soundEffectVolumeChange)}
  </div>

  const Text = () =>
    <div className="config-container font-container">
      Font Styles
      <Select
        options={options}
        styles={styles}
        onChange={changeFont}
        defaultValue={options[options.findIndex(obj => obj.label === font)]}
      />
    </div>


  const COMPONENTS = [
    {component:<Audio/>, text: "Audio"},
    {component:<Text/>, text: "Text"}
  ];
  const [shownComponentIndex, setShownComponentIndex] = useState(0);
  const shownComponent = COMPONENTS[shownComponentIndex].component;
  

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
        <ul> {COMPONENTS.map((e,i) =>
          <button className={"config-btn config-btn--stripe " + (shownComponentIndex === i ? "active" : "")} onClick={() => setShownComponentIndex(i)}>
            {e.text}
          </button>
        )}
        </ul>
        <div id="config-body">
          {shownComponent}


        </div>
      </div>
    );

}

