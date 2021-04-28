import React, {useState} from "react";
import ReactSlider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import Text from "./Text";


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


  const Sound = () => <div>
    {Slider("BGM", bgmVolume, bgmVolumeChange)}
    {Slider("Voice", voiceVolume, voiceVolumeChange)}
    {Slider("Sound Effect", soundEffectVolume, soundEffectVolumeChange)}
  </div>



  const COMPONENTS = [
    {component:<Sound/>, text: "Sound"},
    {component:<Text font={font} changeFont={changeFont}/>, text: "Text"}
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
        <div id="config-body">{shownComponent}</div>
      </div>
    );

}

