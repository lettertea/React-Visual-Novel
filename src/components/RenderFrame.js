import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function RenderFrame(props) {
  function transitionTime(key) {
    if (props[key] === "scene-change") {
      return 2000;
    } else if (
      props[key] === "move-left" ||
      props[key] === "move-left-far" ||
      props[key] === "move-right" ||
      props[key] === "move-right-far" ||
      props[key] === "from-left-leave-right" ||
      props[key] === "from-right-leave-left"
    ) {
      return 1200;
    } else if (props[key] === "shake") {
      return 700;
    } else if (props[key] === "bounce") {
      return 400;
    } else {
      return 250;
    }
  }

  return (
    <div onClick={props.setNextFrame}>
        <ReactCSSTransitionGroup
          transitionName={props.bgTransition || "scene-change"}
          transitionEnterTimeout={transitionTime("bgTransition")}
          transitionLeaveTimeout={transitionTime("bgTransition")}
        >
          <img draggable="false" key={props.bg} className="bg" src={props.bg} />
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          className="sprite-center-parent"
          transitionName={props.spriteTransition || "sprite"}
          transitionEnterTimeout={transitionTime("spriteTransition")}
          transitionLeaveTimeout={transitionTime("spriteTransition")}
        >
          <img draggable="false" key={props.sprite} className={"sprite " + props.spriteEffect} src={props.sprite} />
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName={props.spriteLeftTransition || "sprite"}
          transitionEnterTimeout={transitionTime("spriteLeftTransition")}
          transitionLeaveTimeout={transitionTime("spriteLeftTransition")}
        >
          <img
            draggable="false"
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
            draggable="false"
            key={props.spriteRight + "right"}
            className={"sprite right " + props.spriteRightEffect}
            src={props.spriteRight}
          />
        </ReactCSSTransitionGroup>
      </ReactCSSTransitionGroup>
      {props.text && props.textBoxShown ? (
        <div className="text-box" style={{ "font-family": props.font }}>
          {props.speaker ? <div className="speaker"> {props.speaker} </div> : null}
          <div className="text">{props.speaker ? `"${props.text}"` : props.text}</div>
        </div>
      ) : null}
    </div>
  );
}

export default RenderFrame;
