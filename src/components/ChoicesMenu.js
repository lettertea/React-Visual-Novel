import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function FrameRender(props) {
  return (
    <div class="overlay">
      <button>{props.choices}</button>
    </div>
  );
}

export default FrameRender;
