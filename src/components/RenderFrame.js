import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import spinner from "./spinner.svg";

function RenderFrame(props) {
  function bgTransitionTime(key) {
  renderImage(parentCssClass, transitionName, transitionTimeout, childCssClass, imageSrc) {
    return (
      <ReactCSSTransitionGroup
        className={parentCssClass}
        transitionName={transitionName}
        transitionEnterTimeout={transitionTimeout}
        transitionLeaveTimeout={transitionTimeout}
      >
        <img
          draggable="false"
          key={imageSrc}
          className={childCssClass}
          src={imageSrc}
          style={this.state.loading ? { display: "none" } : null}
          onLoad={this.handleImageChange}
          onError={this.handleImageChange}
        />
      </ReactCSSTransitionGroup>
    );
  }

    return 2000;
  }
  function spriteTransitionTime(key) {
    if (
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
    <div onClick={props.setNextFrame} className="zoom-frame">
      <ReactCSSTransitionGroup
        transitionName={props.bgTransition || "scene-change"}
        transitionEnterTimeout={bgTransitionTime("bgTransition")}
        transitionLeaveTimeout={bgTransitionTime("bgTransition")}
      >
        {this.renderSpinner()}
        {this.renderImage(
          "",
          this.props.bgTransition || "scene-change",
          this.bgTransitionTime("bgTransition"),
          "bg",
          this.props.bg
        )}
        {this.renderImage(
          "sprite-center-parent",
          this.props.spriteTransition || "sprite",
          this.spriteTransitionTime("spriteTransition"),
          "sprite " + this.props.spriteEffect,
          this.props.sprite
        )}
        {this.renderImage(
          "",
          this.props.spriteLeftTransition || "sprite",
          this.spriteTransitionTime("spriteLeftTransition"),
          "sprite left " + this.props.spriteLeftEffect,
          this.props.spriteLeft
        )}
        {this.renderImage(
          "",
          this.props.spriteRightTransition || "sprite",
          this.spriteTransitionTime("spriteRightTransition"),
          "sprite right " + this.props.spriteRightEffect,
          this.props.spriteRight
        )}

        {this.props.text && this.props.textBoxShown && !this.state.loading ? (
          <div className="text-box" style={{ fontFamily: this.props.font }}>
            {this.props.speaker ? <div className="speaker"> {this.props.speaker} </div> : null}
            <div className="text">{this.props.speaker ? `"${this.props.text}"` : this.props.text}</div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default RenderFrame;
