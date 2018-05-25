const b = "Block";
const bn = require("./sprites/lynn-angry.png");
const bh = require("./sprites/lynn-down.png");
const ba = require("./sprites/block-happy.png");

let novelFrames = [
  {
    bg: require("./bg/microphone.jpeg"),
    sprite: bn,
    speaker: "brother man",
    text: "hi"
  },
  {
    choicesExist: true,
    spriteRight: ba,
    spriteLeft: bh,
    spriteLeftTransition: "slide-left",
    spriteTransition: "slide-left"
  },
  {
    text: "Nice to meet you."
  },
  {
    spriteLeft: "",
    bg: require("./bg/entrance.jpeg"),
    transition: "scene-change"
  }
];

// Algorithm to set values to keys from most recent value

function setFutureProperties(key) {
  let cache = "";
  for (let obj of novelFrames) {
    if (obj[key] && obj[key] !== "") {
      cache = obj[key];
    }
    if (obj[key] === "") {
      cache = "";
    }
    if (!obj[key] && obj[key] !== "") {
      obj[key] = cache;
    }
  }
}

setFutureProperties("sprite");
setFutureProperties("spriteLeft");
setFutureProperties("spriteRight");
setFutureProperties("bg");
setFutureProperties("bgm");

export default novelFrames;
