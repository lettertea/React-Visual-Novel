import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function RenderFrame(props) {
  function transitionName(key) {
    let value = props[key];
    // This is to make writing transitions consistent due to
    // spriteLeft and spriteRight also using `translate();`.
    if (value) {
      if (key === "spriteLeftTransition") {
        if (value === "from-left") {
          value += "-at-left";
        }
      }
      if (key === "spriteRightTransition") {
        if (value === "from-right") {
          value += "-at-right";
        }
      }
      return value;
    } else {
      return "sprite";
    }
  }

  function transitionTime(key) {
    if (props[key] === "scene-change") {
      return 2000;
    } else if (
      props[key] === "center-to-left" ||
      props[key] === "center-to-right" ||
      props[key] === "left-to-center" ||
      props[key] === "left-to-right" ||
      props[key] === "right-to-center" ||
      props[key] === "right-to-left" ||
      props[key] === "from-left" ||
      props[key] === "from-right"
    ) {
      return 1000;
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
      <div>
        <ReactCSSTransitionGroup
          component="div"
          className="sprite-center"
          transitionName={transitionName("bgTransition")}
          transitionEnterTimeout={transitionTime("bgTransition")}
          transitionLeaveTimeout={transitionTime("bgTransition")}
        >
          <img key={props.bg} className="bg" src={props.bg} />
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          className="sprite-center"
          transitionName={transitionName("spriteTransition")}
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
          className="sprite-center"
          transitionName={transitionName("spriteLeftTransition")}
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
          className="sprite-center"
          transitionName={transitionName("spriteRightTransition")}
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
