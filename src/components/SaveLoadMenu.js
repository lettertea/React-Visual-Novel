import React, { Component } from "react";

class SaveLoadMenu extends Component {
  constructor() {
    super(); //constructor init

    this.state = {
      slotNumber: 1
    };
  }

  swapSlotButtons() {
    let buttonCache = [];
    for (let i = 1; i < 21; i++) {
      let style = {};
      if (this.state.slotNumber === i) {
        style["background-color"] = "darkGreen";
      } else if (!JSON.parse(localStorage.getItem(i))) {
        style["background-color"] = "gray";
      }
      buttonCache.push(
        <button className="save-load-btn" onClick={() => this.setState({ slotNumber: i })} style={style}>
          {i}
        </button>
      );
    }

    return <div className="save-load-buttons">{buttonCache}</div>;
  }

  renderChoiceMenu() {
    return (
      <div className="overlay-choices overlay-choices-slot">
        {JSON.parse(localStorage.getItem(this.state.slotNumber)).choiceOptions.map(key => (
          <button className="choice-button">{key.content}</button>
        ))}
      </div>
    );
  }

  menuSlot(number) {
    if (JSON.parse(localStorage.getItem(this.state.slotNumber))) {
      return (
        <div
          className="save-load-slot"
          onClick={() => {
            if (
              JSON.parse(localStorage.getItem(this.state.slotNumber)) &&
              window.confirm(this.props.confirmationMessage)
            ) {
              this.props.executeSlot(this.state.slotNumber);
            } else {
              null;
            }
          }}
        >
          {JSON.parse(localStorage.getItem(this.state.slotNumber)).choicesExist ? this.renderChoiceMenu() : null}
          <a>
            <img
              draggable="false"
              className="slot-bg"
              src={JSON.parse(localStorage.getItem(this.state.slotNumber)).bg}
            />
            <img
              draggable="false"
              src={JSON.parse(localStorage.getItem(this.state.slotNumber)).spriteLeft}
              className="sprite left"
            />
            <img
              draggable="false"
              src={JSON.parse(localStorage.getItem(this.state.slotNumber)).sprite}
              className="sprite"
            />
            <img
              draggable="false"
              src={JSON.parse(localStorage.getItem(this.state.slotNumber)).spriteRight}
              className="sprite right"
            />
            {JSON.parse(localStorage.getItem(this.state.slotNumber)).text && this.props.textBoxShown ? (
              <div
                className="text-box"
                style={{
                  fontFamily: JSON.parse(localStorage.getItem(this.state.slotNumber)).font
                }}
              >
                {JSON.parse(localStorage.getItem(this.state.slotNumber)).speaker ? (
                  <div className="speaker">{JSON.parse(localStorage.getItem(this.state.slotNumber)).speaker}</div>
                ) : null}
                <div className="text">{JSON.parse(localStorage.getItem(this.state.slotNumber)).text}</div>
              </div>
            ) : null}
          </a>
        </div>
      );
    } else {
      return <div className="save-load-slot empty" onClick={() => this.props.executeSlot(this.state.slotNumber)} />;
    }
  }

  render() {
    return (
      <div className="overlay overlay-save-load">
        <ul className="header">
          <li>
            <a>{this.props.menuType}</a>
          </li>
          <li className="exit-button" onClick={this.props.toggleMenu}>
            <a>&times;</a>
          </li>
        </ul>
        {this.menuSlot(this.state.slotNumber)}
        <div className="slot-date">{localStorage.getItem("time" + this.state.slotNumber)}</div>
        {this.swapSlotButtons()}
      </div>
    );
  }
}
export default SaveLoadMenu;
