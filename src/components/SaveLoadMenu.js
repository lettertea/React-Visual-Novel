import React from "react";

function SaveLoadMenu(props) {
  function saveOrLoadSlot() {
    return (
      <div className="save-load-slot-container">
        <div className="save-load-slot" id="save-load-type-slot">
          <div id="save-load-logo">{props.menuType}</div>
          <button onClick={props.toggleMenu} id="leave-save-load">
            Leave
          </button>
        </div>
      </div>
    );
  }
  function menuSlot(number) {
    return (
      <div
        className="save-load-slot-container"
        onClick={() => {
          if (!JSON.parse(localStorage.getItem(number))) {
            props.executeSlot(number);
          } else if (
            JSON.parse(localStorage.getItem(number)) &&
            window.confirm(props.confirmationMessage)
          ) {
            props.executeSlot(number);
          } else {
            null;
          }
        }}
      >
        {JSON.parse(localStorage.getItem(number)) ? (
          <div className="save-load-slot">
            <a>
              <img
                className="slot-bg"
                src={JSON.parse(localStorage.getItem(number)).bg}
              />
              <img
                src={JSON.parse(localStorage.getItem(number)).sprite}
                className="slot-sprite"
              />

              {JSON.parse(localStorage.getItem(number)).text &&
              props.textBoxShown ? (
                <div className="text-box slot-text-box">
                  {JSON.parse(localStorage.getItem(number)).speaker ? (
                    <div className="speaker slot-speaker">
                      {JSON.parse(localStorage.getItem(number)).speaker}
                    </div>
                  ) : null}
                  <div className="text slot-text">
                    {JSON.parse(localStorage.getItem(number)).text}
                  </div>
                </div>
              ) : null}
            </a>
            <div className="slot-date">
              {JSON.stringify(localStorage.getItem("time" + number)).replace(
                /\"/g,
                ""
              )}
            </div>
          </div>
        ) : (
          <div className="save-load-slot" />
        )}
      </div>
    );
  }

  return (
    <div className="overlay overlay-save-load">
      {saveOrLoadSlot()}
      {menuSlot("one")}
      {menuSlot("two")}
      {menuSlot("three")}
      {menuSlot("four")}
      {menuSlot("five")}
      {menuSlot("six")}
      {menuSlot("seven")}
      {menuSlot("eight")}
      {menuSlot("nine")}
      {menuSlot("ten")}
      {menuSlot("eleven")}
    </div>
  );
}
export default SaveLoadMenu;
