import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function RenderFrame(props) {
  return (
    <div onClick={props.setNextFrame}>
      <div>
        <ReactCSSTransitionGroup
          component="div"
          transitionName={props.sceneChange ? "scene" : "sprite"}
          transitionEnterTimeout={props.sceneChange ? 2000 : 400}
          transitionLeaveTimeout={props.sceneChange ? 1700 : 300}
          className="sprite-center"
        >
          <img key={props.bg} className="bg" src={props.bg} />
          <img key={props.sprite} className="sprite" src={props.sprite} />
          <img
            key={props.spriteLeft + "left"}
            className="sprite left"
            src={props.spriteLeft}
          />
          <img
            key={props.spriteRight + "right"}
            className="sprite right"
            src={props.spriteRight}
          />
        </ReactCSSTransitionGroup>
        {props.text && props.textBoxShown ? (
          <div className="text-box">
            {props.speaker ? (
              <div className="speaker"> {props.speaker} </div>
            ) : null}
            <div className="text">
              {props.speaker ? `"${props.text}"` : props.text}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default RenderFrame;
