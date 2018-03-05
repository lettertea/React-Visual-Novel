import React from "react";

function SaveMenu(props) {
  var today = new Date().toString();

  function saveMenuSlot() {
    return (
      <div className="responsive">
        <div className="gallery">
          <a target="_blank" href="img_fjords.jpg">
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
    <div className="overlay overlay-slots">
      {saveMenuSlot()}
      {saveMenuSlot()}
      {saveMenuSlot()}
      {saveMenuSlot()}
      {saveMenuSlot()}
      {saveMenuSlot()}
      {saveMenuSlot()}
      {saveMenuSlot()}
      {saveMenuSlot()}
      {saveMenuSlot()}
      {saveMenuSlot()}
      {saveMenuSlot()}
    </div>
  );
}
export default SaveMenu;
