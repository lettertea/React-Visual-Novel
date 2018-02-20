import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function RenderFrame(props) {
  return (
    <div onClick={props.setNextFrame}>
      {props.sceneChange ? (
        <div>
          <ReactCSSTransitionGroup
            component="div"
            transitionName="scene"
            transitionEnterTimeout={2000}
            transitionLeaveTimeout={1700}
          >
            <img key={props.bg} className="bg" src={props.bg} />
            <img key={props.sprite} className="sprite" src={props.sprite} />
            {props.text ? (
              <div className="text-box">
                {props.speaker ? (
                  <div className="speaker"> {props.speaker} </div>
                ) : null}
                <div className="text"> {props.text} </div>
              </div>
            ) : null}
          </ReactCSSTransitionGroup>
        </div>
      ) : (
        <div>
          <ReactCSSTransitionGroup
            component="div"
            transitionName="sprite"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={100}
          >
            <img key={props.bg} className="bg" src={props.bg} />
            <img key={props.sprite} className="sprite" src={props.sprite} />
          </ReactCSSTransitionGroup>
          {props.text ? (
            <div className="text-box">
              {props.speaker ? (
                <div className="speaker"> {props.speaker} </div>
              ) : null}
              <div className="text"> {props.text} </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default RenderFrame;
