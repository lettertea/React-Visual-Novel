import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function RenderFrame(props) {
  return (
    <div onClick={props.setNextFrame}>
      {/* slow css transition for scene change */}
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
            {props.text && props.textBoxShown ? (
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
          {/* fast css transition for regular, sprite changes. No Text box animation */}
          <ReactCSSTransitionGroup
            component="div"
            transitionName="sprite"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={300}
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
      )}
    </div>
  );
}

export default RenderFrame;
