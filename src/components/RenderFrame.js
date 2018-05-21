import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function RenderFrame(props) {
  function transitionTime(key) {
    if (props[key] === "scene-change") {
      return 2000;
    } else if (
      props[key] === "to-left" ||
      props[key] === "to-left-far" ||
      props[key] === "to-right" ||
      props[key] === "to-right-far"
    ) {
      return 1200;
    } else if (
      props[key] === "shake" ||
      props[key] === "from-left" ||
      props[key] === "from-right"
    ) {
      return 700;
    } else if (props[key] === "bounce") {
      return 400;
    } else {
      return 250;
    }
  }

  return (
    <div onClick={props.setNextFrame}>
      <div className="sprite-container">
        <ReactCSSTransitionGroup
          transitionName={props.bgTransition || "scene-change"}
          transitionEnterTimeout={transitionTime("bgTransition")}
          transitionLeaveTimeout={transitionTime("bgTransition")}
        >
          <img key={props.bg} className="bg" src={props.bg} />
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName={props.spriteTransition || "sprite"}
          transitionEnterTimeout={transitionTime("spriteTransition")}
          transitionLeaveTimeout={transitionTime("spriteTransition")}
        >
          <img
            key={props.sprite}
            className={"sprite " + props.spriteEffect}
            src={props.sprite}
          />
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName={props.spriteLeftTransition || "sprite"}
          transitionEnterTimeout={transitionTime("spriteLeftTransition")}
          transitionLeaveTimeout={transitionTime("spriteLeftTransition")}
        >
          <img
            key={props.spriteLeft + "left"}
            className={"sprite left " + props.spriteLeftEffect}
            src={props.spriteLeft}
          />
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName={props.spriteRightTransition || "sprite"}
          transitionEnterTimeout={transitionTime("spriteRightTransition")}
          transitionLeaveTimeout={transitionTime("spriteRightTransition")}
        >
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
