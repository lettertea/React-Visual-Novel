import React from "react";

function SaveAndLoadMenu(props) {
  function menuSlot(number) {
    return (
      <div
        className="responsive"
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
                alt="Trolltunga Norway"
              />
              <img
                src={JSON.parse(localStorage.getItem(number)).sprite}
                className="slot-sprite"
              />
            </a>
            <div className="desc">
              {JSON.stringify(localStorage.getItem("time" + number)).replace(
                /\"/g,
                ""
              )}
            </div>
          </div>
        ) : (
          <div className="menu-slot empty-menu-slot" />
        )}
      </div>
    );
  }

  return (
    <div className="overlay overlay-menu">
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
      <div className="responsive">
        <div className="menu-slot">
          <div className="save-load-logo">{props.menuType}</div>
        </div>
      </div>
    </div>
  );
}
export default SaveAndLoadMenu;
