import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function RenderFrame(props) {
  function bgTransitionName() {
    if (props.bgTransition === "scene-change") {
      return "scene";
    } else if (props.bgTransition === "slide-left") {
      return "slide-left";
    } else if (props.bgTransition === "slide-right") {
      return "slide-right";
    } else {
      return "sprite";
    }
  }
  function bgTransitionEnter() {
    if (props.bgTransition === "scene-change") {
      return 2000;
    } else if (
      props.bgTransition === "slide-left" ||
      props.bgTransition === "slide-right"
    ) {
      return 1000;
    } else {
      return 250;
    }
  }

  function bgTransitionLeave() {
    if (props.bgTransition === "scene-change") {
      return 1700;
    } else if (
      props.bgTransition === "slide-left" ||
      props.bgTransition === "slide-right"
    ) {
      return 1000;
    } else {
      return 250;
    }
  }

  function spriteTransitionName() {
    if (props.spriteTransition === "scene-change") {
      return "scene";
    } else if (props.spriteTransition === "slide-left") {
      return "slide-left";
    } else if (props.spriteTransition === "slide-right") {
      return "slide-right";
    } else {
      return "sprite";
    }
  }
  function spriteTransitionEnter() {
    if (props.spriteTransition === "scene-change") {
      return 2000;
    } else if (
      props.spriteTransition === "slide-left" ||
      props.spriteTransition === "slide-right"
    ) {
      return 1000;
    } else {
      return 250;
    }
  }

  function spriteTransitionLeave() {
    if (props.spriteTransition === "scene-change") {
      return 1700;
    } else if (
      props.spriteTransition === "slide-left" ||
      props.spriteTransition === "slide-right"
    ) {
      return 1000;
    } else {
      return 250;
    }
  }

  function spriteLeftTransitionName() {
    if (props.spriteLeftTransition === "scene-change") {
      return "scene";
    } else if (props.spriteLeftTransition === "slide-left") {
      return "slide-left";
    } else if (props.spriteLeftTransition === "slide-right") {
      return "slide-right";
    } else {
      return "sprite";
    }
  }
  function spriteLeftTransitionEnter() {
    if (props.spriteLeftTransition === "scene-change") {
      return 2000;
    } else if (
      props.spriteLeftTransition === "slide-left" ||
      props.spriteLeftTransition === "slide-right"
    ) {
      return 1000;
    } else {
      return 250;
    }
  }

  function spriteLeftTransitionLeave() {
    if (props.spriteLeftTransition === "scene-change") {
      return 1700;
    } else if (
      props.spriteLeftTransition === "slide-left" ||
      props.spriteLeftTransition === "slide-right"
    ) {
      return 1000;
    } else {
      return 250;
    }
  }
  function spriteRightTransitionName() {
    if (props.spriteRightTransition === "scene-change") {
      return "scene";
    } else if (props.spriteRightTransition === "slide-left") {
      return "slide-left";
    } else if (props.spriteRightTransition === "slide-right") {
      return "slide-right";
    } else {
      return "sprite";
    }
  }
  function spriteRightTransitionEnter() {
    if (props.spriteRightTransition === "scene-change") {
      return 2000;
    } else if (
      props.spriteRightTransition === "slide-left" ||
      props.spriteRightTransition === "slide-right"
    ) {
      return 1000;
    } else {
      return 250;
    }
  }

  function spriteRightTransitionLeave() {
    if (props.spriteRightTransition === "scene-change") {
      return 1700;
    } else if (
      props.spriteRightTransition === "slide-left" ||
      props.spriteRightTransition === "slide-right"
    ) {
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
          transitionName={bgTransitionName()}
          transitionEnterTimeout={bgTransitionEnter()}
          transitionLeaveTimeout={bgTransitionLeave()}
        >
          <img key={props.bg} className="bg" src={props.bg} />
          <ReactCSSTransitionGroup
            className="sprite-center"
            transitionName={spriteTransitionName()}
            transitionEnterTimeout={spriteTransitionEnter()}
            transitionLeaveTimeout={spriteTransitionLeave()}
          >
            <img
              key={props.sprite}
              className={"sprite " + props.spriteEffect}
              src={props.sprite}
            />
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
            className="sprite-center"
            transitionName={spriteLeftTransitionName()}
            transitionEnterTimeout={spriteLeftTransitionEnter()}
            transitionLeaveTimeout={spriteLeftTransitionLeave()}
          >
            <img
              key={props.spriteLeft + "left"}
              className={"sprite left " + props.spriteLeftEffect}
              src={props.spriteLeft}
            />
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
            className="sprite-center"
            transitionName={spriteRightTransitionName()}
            transitionEnterTimeout={spriteRightTransitionEnter()}
            transitionLeaveTimeout={spriteRightTransitionLeave()}
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
