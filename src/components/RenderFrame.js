import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function RenderFrame(props) {
  function transitionName(key) {
    if (props[key] === "scene-change") {
      return "scene";
    } else if (props[key] === "slide-left") {
      return "slide-left";
    } else if (props[key] === "slide-right") {
      return "slide-right";
    } else {
      return "sprite";
    }
  }
  function transitionEnter(key) {
    if (props[key] === "scene-change") {
      return 2000;
    } else if (props[key] === "slide-left" || props[key] === "slide-right") {
      return 1000;
    } else {
      return 250;
    }
  }

  function transitionLeave(key) {
    if (props[key] === "scene-change") {
      return 1700;
    } else if (props[key] === "slide-left" || props[key] === "slide-right") {
      return 1000;
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
          transitionName={transitionName("bgTransition")}
          transitionEnterTimeout={transitionEnter("bgTransition")}
          transitionLeaveTimeout={transitionLeave("bgTransition")}
        >
          <img key={props.bg} className="bg" src={props.bg} />
          <ReactCSSTransitionGroup
            className="sprite-center"
            transitionName={transitionName("spriteTransition")}
            transitionEnterTimeout={transitionEnter("spriteTransition")}
            transitionLeaveTimeout={transitionLeave("spriteTransition")}
          >
            <img
              key={props.sprite}
              className={"sprite " + props.spriteEffect}
              src={props.sprite}
            />
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
            className="sprite-center"
            transitionName={transitionName("spriteLeftTransition")}
            transitionEnterTimeout={transitionEnter("spriteLeftTransition")}
            transitionLeaveTimeout={transitionLeave("spriteLeftTransition")}
          >
            <img
              key={props.spriteLeft + "left"}
              className={"sprite left " + props.spriteLeftEffect}
              src={props.spriteLeft}
            />
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
            className="sprite-center"
            transitionName={transitionName("spriteRightTransition")}
            transitionEnterTimeout={transitionEnter("spriteRightTransition")}
            transitionLeaveTimeout={transitionLeave("spriteRightTransition")}
          >
            <img
              key={props.spriteRight + "right"}
              className={"sprite right " + props.spriteRightEffect}
              src={props.spriteRight}
            />
          </ReactCSSTransitionGroup>
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
