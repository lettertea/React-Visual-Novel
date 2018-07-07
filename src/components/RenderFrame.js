import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import spinner from "./spinner.svg";

function imagesLoaded(parentNode) {
  const imgElements = [...parentNode.querySelectorAll("img")];
  for (let i = 0; i < imgElements.length; i += 1) {
    const img = imgElements[i];
    if (!img.complete) {
      return false;
    }
  }
  return true;
}

class RenderFrame extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleImageChange() {
    this.setState({
      loading: !imagesLoaded(this.frame)
    });
  }

  renderSpinner() {
    if (!this.state.loading) {
      return null;
    }
    return <img src={spinner} id="spinner" />;
  }

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

  bgTransitionTime(key) {
    return 2000;
  }
  spriteTransitionTime(key) {
    if (
      this.props[key] === "move-left" ||
      this.props[key] === "move-left-far" ||
      this.props[key] === "move-right" ||
      this.props[key] === "move-right-far" ||
      this.props[key] === "from-left-leave-right" ||
      this.props[key] === "from-right-leave-left"
    ) {
      return 1200;
    } else if (this.props[key] === "shake") {
      return 700;
    } else if (this.props[key] === "bounce") {
      return 400;
    } else {
      return 250;
    }
  }

  render() {
    return (
      <div
        onClick={this.props.setNextFrame}
        className="zoom-frame"
        ref={element => {
          this.frame = element;
        }}
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
