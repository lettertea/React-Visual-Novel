import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function RenderFrame(props) {
  function transitionName() {
    if (props.transition === "sceneChange") {
      return "scene";
    } else if (props.transition === "spriteSlide") {
      return "sprite-slide";
    } else {
      return "sprite";
    }
  }
  function transitionEnter() {
    if (props.transition === "sceneChange") {
      return 2000;
    } else if (props.transition === "spriteSlide") {
      return 400;
    } else {
      return 250;
    }
  }

  function transitionLeave() {
    if (props.transition === "sceneChange") {
      return 1700;
    } else if (props.transition === "spriteSlide") {
      return 400;
    } else {
      return 250;
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
          <img
            key={props.sprite}
            className={"sprite " + props.spriteEffect}
            src={props.sprite}
          />
          <img
            key={props.spriteLeft + "left"}
            className={"sprite left " + props.spriteLeftEffect}
            src={props.spriteLeft}
          />
          <img
            key={props.spriteRight + "right"}
            className={"sprite right " + props.spriteRightEffect}
            src={props.spriteRight}
          />
        </ReactCSSTransitionGroup>
        {props.text && props.textBoxShown ? (
          <div className="text-box" style={{ "font-family": props.font }}>
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
