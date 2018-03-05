import React from "react";

function SaveAndLoadMenu(props) {
  var today = new Date().toString();

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
        <div className="menu-slot">
          <a>
            <img
              className="slot-bg"
              src="bg/rainy_class.png"
              alt="Trolltunga Norway"
            />
            <img src="sprites/shizuku-angry.png" className="slot-sprite" />
          </a>
          <div className="desc">{today}</div>
        </div>
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
