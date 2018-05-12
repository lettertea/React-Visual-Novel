import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function RenderFrame(props) {
  function transitionName() {
    if (props.animation === "sceneChange") {
      return "scene";
    } else if (props.animation === "spriteSlide") {
      return "sprite-slide";
    } else {
      return "sprite";
    }
  }
  function transitionEnter() {
    if (props.animation === "sceneChange") {
      return 2000;
    } else if (props.animation === "spriteSlide") {
      return 1000;
    } else {
      return 300;
    }
  }

  function transitionLeave() {
    if (props.animation === "sceneChange") {
      return 1700;
    } else if (props.animation === "spriteSlide") {
      return 1000;
    } else {
      return 300;
    }
  }
  return (
    <div onClick={props.setNextFrame}>
      <div>
        <ReactCSSTransitionGroup
          component="div"
          className="sprite-center"
          transitionName={transitionName()}
          transitionEnterTimeout={transitionEnter()}
          transitionLeaveTimeout={transitionLeave()}
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
