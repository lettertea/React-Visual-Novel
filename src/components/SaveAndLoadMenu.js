import React from "react";

function SaveAndLoadMenu(props) {
  function saveOrLoadSlot() {
    return (
      <div className="menu-slot-container">
        <div className="menu-slot" id="menu-type-slot">
          <div id="save-load-logo">{props.menuType}</div>
          <button onClick={props.toggleMenu} id="leave-menu-button">
            Leave
          </button>
        </div>
      </div>
    );
  }
  function menuSlot(number) {
    return (
      <div
        className="menu-slot-container"
        onClick={() => {
          if (
            JSON.parse(localStorage.getItem(number)) &&
            window.confirm("Are you sure?")
          ) {
            props.executeSlot(number);
          } else {
            props.executeSlot(number);
          }
        }}
      >
        {JSON.parse(localStorage.getItem(number)) ? (
          <div className="menu-slot">
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
          <div className="menu-slot" />
        )}
      </div>
    );
  }

  return (
    <div className="overlay overlay-menu">
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
export default SaveAndLoadMenu;
