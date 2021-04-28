import Select from "react-select";
import React from "react";

export default props => {

  const options = [
    {label: "Arial"},
    {label: "Arial Black"},
    {label: "Courier New"},
    {label: "Georgia"},
    {label: "Helvetica"},
    {label: "Impact"},
    {label: "Lucida Sans Unicode"},
    {label: "Times"},
    {label: "Trebuchet MS"},
    {label: "Verdana"}
  ];

  for (let i = 0; i < options.length; i++) {
    options[i].value = options[i].label;
  }

  const styles = {
    option: (styles, {data}) => {
      return {
        ...styles,
        fontFamily: data.label
      };
    }
  };

  return(
  <div className="config-container font-container">
    Font Styles
    <Select
      options={options}
      styles={styles}
      onChange={props.changeFont}
      defaultValue={options[options.findIndex(obj => obj.label === props.font)]}
    />
  </div>)
}