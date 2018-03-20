import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function RenderFrame(props) {
  return (
    <div onClick={props.setNextFrame}>
      <div>
        {/* fast css transition for regular, sprite changes. No Text box animation */}
        <ReactCSSTransitionGroup
          component="div"
          transitionName={props.sceneChange ? "scene" : "sprite"}
          transitionEnterTimeout={props.sceneChange ? 2000 : 400}
          transitionLeaveTimeout={props.sceneChange ? 1700 : 300}
        >
          <img key={props.bg} className="bg" src={props.bg} />
          <img key={props.sprite} className="sprite" src={props.sprite} />
        </ReactCSSTransitionGroup>
        {props.text && props.textBoxShown ? (
          <div className="text-box">
            {props.speaker ? (
              <div className="speaker"> {props.speaker} </div>
            ) : null}
            <div className="text"> {props.text} </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default RenderFrame;
